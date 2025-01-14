import Student from "../model/studentModel.mjs";

export const create = async(req, res)=>{
    try {
        const studentData = new Student(req.body);
        const {regId} = studentData;
        const studentExist = await Student.findOne({regId})
        if (studentExist){
            return res.status(400).json({message : "Student already exists."})
        }
        const savedstudent = await studentData.save();
        res.status(200).json(savedstudent)
    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "})
    }
}

export const fetch = async (req, res)=>{
    try {
        const student = await Student.find();
        if(student.length === 0 ){
            return res.status(404).json({message : "students not Found."})
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const studentExist = await Student.findOne({_id:id})
        if (!studentExist){
            return res.status(404).json({message : "Student not found."})
        }
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateStudent);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const deleteStudent = async (req, res)=>{
    try {
        const id = req.params.id;
        const studentExist = await Student.findOne({_id:id})
        if(!studentExist){
            return res.status(404).json({message : " Student Not Found. "})
        }
        await Student.findByIdAndDelete(id);
        res.status(201).json({message : " Student deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}