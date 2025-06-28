import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const paymentSchema = new mongoose.Schema({
    fromUserId: {  
        type: String,
        
        
    },
    toUserId: {
        type: String,
        
        required: true
    },  
    amount: {
        type: Number,
        required: true
    },
    message: {
        type: String,

    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    },
    oid: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


export default mongoose.models.Payment ||  model("Payment", paymentSchema);