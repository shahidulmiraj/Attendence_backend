import mongoose from "mongoose"

const attendanceSchema = new mongoose.Schema({
    department: { 
        type: String, 
        required: true 
    },
    session: { 
        type: String, 
        required: true 
    },
    semester: { 
        type: String, 
        required: true 
    },
    course: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
