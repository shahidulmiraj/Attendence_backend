
import express from "express";

import { create, deletedepartment, fetch, update } from "../controller/departmentController.mjs";

const route = express.Router();

route.post ("/create", create); 
route.get("/getalldepartment", fetch); 
route.put("/update/:id", update); 
route.delete("/delete/:id", deletedepartment); 

export default route;