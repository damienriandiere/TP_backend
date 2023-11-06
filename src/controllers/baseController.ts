import { NextFunction, Request, Response } from "express";
import * as baseService from '../services/baseService';

export function getUsers(req: Request, res: Response, next: NextFunction) {
    const users = baseService.getUsers();

    res.status(200).json({users});
}

export function hello(req: Request, res: Response, next: NextFunction) {
    const receivedData = req.body;
    console.log('Data received:', receivedData);
    res.status(200).json('Received data: ' + receivedData);
}

export function addUser(req : Request, res : Response, next : NextFunction) {
    const { name, email } = req.body;

    const user = baseService.addUser(name, email);

    res.status(200).json(user);
}