import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema)