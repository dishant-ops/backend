import mongoose from "mongoose"

const subscriptionSchema = mongoose.Schema(
    {
        Subscriber: {
            type: Schema.Types.ObjectId, // one who is subscribing
            ref: "User"
        },
        Channel: {
            type: Schema.Types.ObjectId, // one whom 'subscriber' is subscribing
            ref: "User"
        },

    },
     {timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema);