import mongoose from "mongoose"

const eventRegistrationSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    registeredAt:{
        type: Date,
        default: Date.now
    },
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }
},{timestamps: true})

export const EventRegistration=mongoose.model('EventRegistration',eventRegistrationSchema )