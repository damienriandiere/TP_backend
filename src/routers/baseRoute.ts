import { Router } from "express";
import * as baseController from "../controllers/baseController";

export function getRouter(){
    const router = Router();

    router.get('/getUsers', baseController.getUsers);
    router.post('/hello', baseController.hello);
    router.post('/addUser', baseController.addUser);

    return router;
}