import express from "express";
import { routesCar } from "./carRoute.js";
import { routesRent } from "./rentRoute.js";
import { routesRenturn } from "./return.js";
import { routesUser } from "./userRoute.js";

const routes = express.Router();

routes.use(routesCar);
routes.use(routesRent);
routes.use(routesRenturn);
routes.use(routesUser)

export { routes };
