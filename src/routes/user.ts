import { Router } from "express";
import { UserController } from "../controller/UserController";
import { User } from "../entity/User";

export const routerUser = Router();
const userCtrl = new UserController();

//Save New users service
routerUser.post('/', async (req, res) => {
    const {name, email} = req.body;
    const user = new User(name, email);
    const userSaved = await userCtrl.save(user);
    res.json(userSaved);
});

//List users
routerUser.get('/', async (req, res) => {
    const users = await userCtrl.getAll();
    res.json(users);
});

// Launch of the user
routerUser.get('/launchs/:idUser', async (req, res) => {
    const idUser = parseInt(req.params.idUser);
    const launchs = await userCtrl.getLaunchByUser(idUser);
    res.json(launchs);
})