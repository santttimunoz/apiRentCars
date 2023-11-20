import mongoose from "mongoose";

const Schema = mongoose.Schema

const rent = Schema({
    rentNumber :{
        type: Number,
        required: true
    },
    userName :{
        type: String,
        required: true
    },
    plateNumber :{
        type: String,
        required: true
    },
    initialDate:{
        type: Date,
        required: true
    },
    finalDate:{
        type: Date,
        required: true
    }  
})

const rentModel = mongoose.model('rents', rent)
export { rentModel }