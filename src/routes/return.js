import express from "express";
import { ReturnControl } from "../controllers/returncarControl.js";

const returnControl = new ReturnControl()
const routesRenturn = express.Router()

routesRenturn.post(
    "/api/rent",
     returnControl.ReturnSave
)
routesRenturn.delete(
    "/api/rent",
    returnControl.ReturnDelete
    )
routesRenturn.put(
    "/api/rent",
    returnControl.ReturnUpdate
    )
routesRenturn.get(
    "/api/rent",
    returnControl.ReturnShow
    )
// routesRenturn.get()

export { routesRenturn }