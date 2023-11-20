import { rentModel } from "../models/rentModel.js";

export class RentService{
    constructor(){

    }
    async RentSave(data){
        let rent =  new rentModel(data)
        return await rent.save()
    }
    async RentDelete(){}
    async RentUpdate(){}
    async RentShow(){}
    async RentsShow(){}
}