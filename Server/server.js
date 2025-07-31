import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Router from "./Route/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", Router);

mongoose
  .connect("mongodb+srv://abcd1234:abcd1234@portfolio.iflbpnq.mongodb.net/")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.listen(5000, () => {
  console.log("App is Running like Flash on 5000 Port");
});
