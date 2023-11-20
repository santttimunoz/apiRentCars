import mongoose from "mongoose";

const Schema = mongoose.Schema

const car = new Schema({
    plateNumber :{
        type: Number,
        required: true
    },
    brand :{
        type: String,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    dailyValue :{
        type: Number,
        required: true
    }
})

export const carModel = mongoose.model('cars', car)
