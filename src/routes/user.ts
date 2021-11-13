import { Router } from "express";

export const routerUser = Router();

//Cria uma rota padrão
routerUser.get('/', (req, res) => res.send('Service of User'));