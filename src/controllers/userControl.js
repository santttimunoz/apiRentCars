import { UserService } from "../services/userService.js";

export class UserControl {
  constructor() {}
  async UserSave(req, res) {
    try {
      let userService = new UserService();
      let data = req.body;
      let user = await userService.UserSave(data);
      res.status(200).json({
        message: "usuario guardado",
        user: user,
      });
    } catch (error) {
      console.log(error)
      res.status(400).json({
        message: "error al guardar usuario ",
        user: null,
      });
    }
  }
  async UserDelete() {}
  async UserUpdate(req, res) {
    try {
      let userService = new UserService()
            let id = req.params.id
            let data = req.body
            let user =  await userService.UserUpdate(id, data)
            res.status(200).json({
                message: "usuario actualizado"
            })
    } catch (error) {
      res.status(400).json({
        message: "error al actualizar usuario",
        user: null
    })
    }
  }
  async UserShow() {}
  async UsersShow(req, res) {
    try {
       let userService = new UserService()
       let users = await userService.UsersShow()
       res.status(200).json({
        message: "lista de usuarios",
        users: users
       })
    } catch (error) {
      console.log(error)
      res.status(200).json({
        message: "error al traer la lista de usuarios",
        users: null
       })
    }
   
  }
}
