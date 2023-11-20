import express from "express";
import cors from "cors";
import { routes } from "./routes/routes.js";
import { establecerConexionDB } from "./database.js";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBD();
    this.procesarPeticiones();
  }
  levantarServer() {
    this.app.listen(4000, function () {
      console.log("servidor encendido");
    });
  }
  conectarBD() {
    establecerConexionDB();
  }
  procesarPeticiones() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use("/", routes);
  }
}
