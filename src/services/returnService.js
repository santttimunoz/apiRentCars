import { returnModel } from "../models/returnModel.js";

export class ReturnService{
    constructor(){

    }
    async ReturnSave(data){
        let returns = new returnModel(data)
        return await returns.save()
    }
    async ReturnDelete(){}
    async ReturnUpdate(){}
    async ReturnShow(){}
    async ReturnsShow(){}
}