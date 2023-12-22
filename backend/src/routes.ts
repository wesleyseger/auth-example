import express from "express";

export const routes = express.Router();

import { Login } from "./controllers/AuthController";
import { Authorization } from "./middlewares/jwtAuthentication";

routes.post("/login", Login);

routes.get("/test", Authorization, (req, res) => res.send('Hello World! Authenticated Route Test!'));

routes.get("/public/test", (req, res) => res.send('Hello World! Public Test!'));