import { userModel } from "../models/userModel.js";

export class UserService{
    constructor(){

    }
    async UserSave(data){
        let user = new userModel(data)
        return await user.save()
    }
    async UserDelete(){}
    async UserUpdate(id, data){
     await userModel.findByIdAndUpdate(id, data)        
    }
    async UserShow(){}
    async UsersShow(){
       return await userModel.find()
    }
}