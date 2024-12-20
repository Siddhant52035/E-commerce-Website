import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { login, signup } from "./controllers/authController.js"

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/QuickSell")

app.post("/login", login)
app.post("/signup", signup)

app.listen("3005", () => console.log("server is running"));