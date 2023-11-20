import { carModel } from "../models/carModel.js";

export class CarService {
  constructor() {}
  async CarSave(data) {
    let car = await carModel(data);
    return await car.save();
  }
  async CarDelete(id) {
    await carModel.findByIdAndDelete(id)
  }
  async CarUpdate(id, data) {
    return carModel.findByIdAndUpdate(id, data)
  }
  async CarShow(id) {
   await carModel.findById(id)
  }
  async CarsShow() {
    return await carModel.find()
  }
}
