import { ReturnService } from "../services/returnService.js";

export class ReturnControl {
  constructor() {}
  async ReturnSave(req, res) {
    try {
      let returnService = new ReturnService();
      let data = req.body;
      let renturns = returnService.ReturnSave(data);
      res.status(200).json({
        message: "devolucion guardada",
        renturns: renturns,
      });
    } catch (error) {
        res.status(200).json({
            message: "error al guardar la devolucion",
            renturns: renturns,
          });
    }
  }
  async ReturnDelete() {}
  async ReturnUpdate() {}
  async ReturnShow() {}
  async ReturnsShow() {}
}
