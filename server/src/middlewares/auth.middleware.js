import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJwt = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new ApiError(401, "Not authorized. Token not provided.");
        }

        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                throw new ApiError(401, "Session expired. Please log in again.");
            } else {
                throw new ApiError(401, error?.message || "Not authorized. Try login again.");
            }
        }

        const resp = await User.findById(decodedToken.userId).select("-password -refreshToken isAdmin email");
        if (!resp) {
            throw new ApiError(401, "User not found. Try login again.");
        }

        req.user = {
            email: resp.email,
            isAdmin: resp.isAdmin,
            userId: decodedToken.userId,
        };

        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Not authorized. Try login again.");
    }
});

const isAdminRoute = (req, _, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        throw new ApiError(403, "Not authorized as admin. Try logging in as admin.");
    }
};

export { verifyJwt, isAdminRoute };
