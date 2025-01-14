import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    regId: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
}, { timestamps: true }); 



export default mongoose.model('Student', studentSchema);