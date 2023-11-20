import express from "express";
import { RentControl } from "../controllers/rentControl.js";

const rentControl = new RentControl()
const routesRent = express.Router()

routesRent.post(
    "/api/rent",
     rentControl.RentSave
)
routesRent.delete(
    "/api/rent",
    rentControl.RentDelete
    )
routesRent.put(
    "/api/rent",
    rentControl.RentUpdate
    )
routesRent.get(
    "/api/rent",
    rentControl.RentShow
    )
// routesRent.get()

export { routesRent }