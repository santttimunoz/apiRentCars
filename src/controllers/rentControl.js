import { RentService } from "../services/rentService.js";

export class RentControl {
  constructor() {}
  async RentSave(req, res) {
    try {
      let rentService = new RentService();
      let data = req.body;
      let rent = await rentService.RentSave(data);
      res.status(200).json({
        message: "renta guardada",
        rent: rent
      })
    } catch (error) {
        res.status(200).json({
            message: "error al guardar renta",
            rent: null
          })
    }
  }
  async RentDelete() {}
  async RentUpdate() {}
  async RentShow() {}
  async RentsShow() {}
}
