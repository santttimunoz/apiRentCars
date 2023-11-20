import { CarService } from "../services/carSevice.js";

export class CarControl{
    constructor(){

    }
    async CarSave(req, res){
        try {
            let carService = new CarService()
            let data = req.body
            let car =  await carService.CarSave(data)
            res.status(200).json({
                message: "carro guardado",
                car: car
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error al guardar car",
                car: null
            })
        }
    }
    async CarDelete(req, res){
        try {
            let carService = new CarService()
            let id = req.params.id
            let car =  await carService.CarDelete(id)
            res.status(200).json({
                message: "carro eliminado",
                car: car
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error al eliminar car",
                car: null
            })
        }
    }
    async CarUpdate(req, res){
        try {
            let carService = new CarService()
            let id = req.params.id
            let data = req.body
            let car =  await carService.CarUpdate(id, data)
            res.status(200).json({
                message: "carro actualizado",
                car: car
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error al actualizar car",
                car: null
            })
        }
    }
    async CarShow(req, res){
        try {
            let carService = new CarService()
            let id = req.params.id         
            let car =  await carService.CarShow(id)
            res.status(200).json({
                message: "carro encontrado",
                car: car
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error al encontrar car",
                car: null
            })
        }
    }
    async CarsShow(req, res){
        try {
            let carService = new CarService()
            
            let car =  await carService.CarsShow()
            res.status(200).json({
                message: "lista de carros",
                car: car
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error al buscar la lista de cars",
                car: null
            })
        }
    }
}