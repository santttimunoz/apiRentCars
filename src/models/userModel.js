import mongoose from "mongoose";

const Schema = mongoose.Schema

const user = new Schema({
    name :{
        type: String,
        required: true
    },
    userName :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    role :{
        type: String,
        required: true
    },
    secretWord :{
        type: String,
        required: true
    }
})

const userModel = mongoose.model('users', user)
export { userModel }