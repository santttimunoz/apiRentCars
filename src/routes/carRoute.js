import express from "express";
import { CarControl } from "../controllers/carControl.js";

const carControl = new CarControl()
const routesCar = express.Router()

routesCar.post(
    "/api/car",
     carControl.CarSave
)
routesCar.delete(
    "/api/car",
    carControl.CarDelete
    )
routesCar.put(
    "/api/car",
    carControl.CarUpdate
    )
routesCar.get(
    "/api/car",
    carControl.CarShow
    )
// routesCar.get()

export { routesCar }