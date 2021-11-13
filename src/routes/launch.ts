import { Router } from "express";
import { LaunchController } from "../controller/LaunchController";
import { Launch } from "../entity/Launch";
import { UserController }from '../controller/UserController'


export const routerLaunch = Router();
const userCtrl = new UserController();
const launchCtrl = new LaunchController();

// Save launch service
routerLaunch.post('/', async(req, res) => {
    const { idUser, value, description, date } = req.body;
    const user = await userCtrl.getById(idUser);
    if (user) {
        const launch = new Launch(value, description, date, user);
        const launchSaved = await launchCtrl.save(launch);
        res.json(launchSaved);
    }else {
        res.status(404).json({ message: 'Usuário não encontrado '});
    }
})