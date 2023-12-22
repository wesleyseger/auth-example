import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { findUserDB } from "../database/dbAuthExample";

export const Login = async (req: Request, res: Response) => {

    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Invalid username or password');

    try {
        const [user] = await findUserDB(username);
        if (!user) return res.status(404).send("User not found");

        const checkPassword = (password === user.password);
        if (!checkPassword) return res.status(400).json("Wrong password");

        const token = jwt.sign({ user }, 'PLEASE_SET_JWTSECRET_ON_.ENV', { expiresIn: '3d' });

        res.send({ token: token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};