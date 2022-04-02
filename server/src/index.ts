import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

//import controllers
import register from "./controllers/register";
import login from "./controllers/login";
import {
  getAllProducts,
  getProductsByCat,
  getProductsBySubCat,
} from "./controllers/getProducts";
import { searchProducts } from "./controllers/searchProducts";

// Import Route
import loggedInRoute from "./routes/loggedIn";

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT }));

app.use("/s", loggedInRoute);

app.post("/register", register);
app.post("/login", login);
app.get("/search/:searchQuery", searchProducts);
app.get("/products", getAllProducts);
app.get("/products/:cat", getProductsByCat);
app.get("/products/:cat/:subCat", getProductsBySubCat);

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
