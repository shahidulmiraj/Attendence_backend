import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    courseTitle: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        required: true,
    }
}, { timestamps: true }); 



export default mongoose.model('Course', courseSchema);