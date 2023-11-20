import express from "express";
import { UserControl } from "../controllers/userControl.js";

const userControl = new UserControl()
const routesUser = express.Router()

routesUser.post(
    "/api/user",
     userControl.UserSave
)
routesUser.delete(
    "/api/user",
    userControl.UserDelete
    )
routesUser.put(
    "/api/user/:id",
    userControl.UserUpdate
    )
routesUser.get(
    "/api/user",
    userControl.UserShow
    )
 routesUser.get("/api/users",
 userControl.UsersShow)

export { routesUser }