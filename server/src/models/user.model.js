import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        
        title: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100,
            trim: true,
        },

        role: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },

        tasks: {
            type: Schema.Types.ObjectId,
            ref: "Task",
        },

        isActive: {
            type: Boolean,
            required: true,
            default: false,
        }
    }, 
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema)