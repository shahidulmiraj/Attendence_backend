import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
// import cors from 'cors';

import studentroute from "./routes/studentRoute.mjs";
import teacherroute from "./routes/teacherRoute.mjs";
import courseroute from "./routes/courseRoute.mjs";
import departmentroute from "./routes/departmentRoutes.js";

const app = express()

// app.use(cors);
app.use(bodyParser.json())

dotenv.config()

const PORT = process.env.PORT || 5000;

const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully."); 
    app.listen(PORT, () => {
        console.log(`Server is running...`); 
    });
}).catch((error) => console.log(error));


app.use("/api/student", studentroute);
app.use("/api/teacher", teacherroute);
app.use("/api/course", courseroute);
app.use("/api/department", departmentroute);

