import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Department",
        required: true
    }
});

export default mongoose.model('Session', sessionSchema);
