import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

//import controllers
import register from "./controllers/register";
import login from "./controllers/login";

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT }));

app.post("/register", register);
app.post("/login", login);

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
