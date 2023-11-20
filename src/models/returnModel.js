import mongoose from "mongoose";

const Schema = mongoose.Schema

const returned = new Schema({
    returnNumber :{
        type: Number,
        required: true
    },
    rentNumber :{
        type: Number,
        required: true
    },
    returnDate :{
        type: Date,
        required: true
    }
})

const returnModel = mongoose.model('returns', returned)
export { returnModel }