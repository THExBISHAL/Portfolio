import express from "express";
import { SaveVisitors } from "../Controller/visitor-controller.js";

const Router = express.Router();

Router.post("/visitor", SaveVisitors);

export default Router;
