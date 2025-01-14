
import express from "express";

import { create, deletecourse, fetch, update } from "../controller/courseController.mjs";

const route = express.Router();

route.get("/getallstudent", fetch); 
route.post ("/create", create); 
route.put("/update/:id", update); 
route.delete("/delete/:id", deletecourse); 

export default route;