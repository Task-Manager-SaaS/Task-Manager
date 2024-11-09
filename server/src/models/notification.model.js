import mongoose, {Schema} from "mongoose";

const notificationSchema = new Schema(
    {
        team: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        task: [
            {
                type: Schema.Types.ObjectId,
                ref: "Task",
            },
        ],

        notificationType: {
            type: String,
            default: "alert",
            enum: ["alert", "message"],
        },

        isRead: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    }, 
    {
        timestamps: true,
    },
);

export const Notification = mongoose.model("Notification", notificationSchema)