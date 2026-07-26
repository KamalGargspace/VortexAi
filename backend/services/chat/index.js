import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";


dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello from chat",
  });
});

app.listen(PORT, () => {
  console.log(`chat is running at ${PORT}`);
  connectDb();
});
