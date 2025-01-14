
import express from "express";

import { create, deleteStudent, fetch, update } from "../controller/studentController.mjs";

const route = express.Router();

route.get("/getallstudent", fetch); 
route.post ("/create", create); 
route.put("/update/:id", update); 
route.delete("/delete/:id", deleteStudent); 

export default route;