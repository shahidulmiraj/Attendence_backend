
import express from "express";

import { create, deleteTeacher, fetch, update } from "../controller/teacherController.mjs";

const route = express.Router();

route.get("/getallteacher", fetch); 
route.post ("/create", create); 
route.put("/update/:id", update); 
route.delete("/delete/:id", deleteTeacher); 

export default route;