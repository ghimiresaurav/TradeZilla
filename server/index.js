import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  return res.json({ message: "Data received" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
