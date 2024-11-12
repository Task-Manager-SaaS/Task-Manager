import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"

 const verifyJwt = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        console.log(token);

        if (token) {
            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            const resp = await User.findById(decodedToken.userId).select("-password -refreshToken isAdmin email");

            if (!resp) {
                throw new ApiError(401, "User not found. Try login again.")
            }

            req.user = {
                email: resp.email,
                isAdmin: resp.isAdmin,
                userId: decodedToken.userId,
            };

            next();
        } else {
            throw new ApiError(401, "Not authorized. Try login again.");
        }
        
    } catch (error) {
        throw new ApiError(401, error?.message || "Not authorized. Try login again.");
    }
});

const isAdminRoute = (req, _, next) => {
    if (req.user && req.user.isAdmin) {
        next();
        
    } else {
        throw new ApiError(401, "Not authorized as admin. Try login as admin.")
    };
};


export { verifyJwt, isAdminRoute };
