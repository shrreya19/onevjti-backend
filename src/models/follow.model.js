import mongoose,{Schema} from "mongoose"

const followSchema=new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    committee:{
        type: Schema.Types.ObjectId,
        ref: 'Committee'
    }
},{timestamps: true})

export const Follow=mongoose.model('Follow',followSchema)