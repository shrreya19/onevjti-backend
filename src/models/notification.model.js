import mongoose from "mongoose"

const notificationSchema=new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    type:{
        type: String,
    },
    isRead:{
        type: Boolean,
        default: false
    },
    sentAt:{
        type: Date,
        default: Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }
},{timestamps: true})

export const Notification=mongoose.model('Notification',notificationSchema)