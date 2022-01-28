import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import controllers
import register from "./controllers/register.js";

// Config environment variables
dotenv.config();

const app = express();

// Use json
app.use(express.json());

// Allow Resource sharing with CORS
app.use(cors({ origin: process.env.CLIENT }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", register);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
