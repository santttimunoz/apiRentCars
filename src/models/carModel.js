import mongoose from "mongoose";

const Schema = mongoose.Schema

const car = Schema({
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

const carModel = mongoose.model('cars', car)
export { carModel }