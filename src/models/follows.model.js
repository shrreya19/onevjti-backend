import mongoose from "mongoose"

const followsSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    committee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Committee'
    }
},{timestamps: true})

export const Follows=mongoose.model('Follows',followsSchema)