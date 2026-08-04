import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello from agent",
  });
});

app.listen(PORT, () => {
  console.log(`agent is running at ${PORT}`);
  connectDb();
});
