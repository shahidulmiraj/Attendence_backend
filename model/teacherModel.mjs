import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    }
}, { timestamps: true }); 



export default mongoose.model('Teacher', teacherSchema);