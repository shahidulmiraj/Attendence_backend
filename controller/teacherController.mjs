import Teacher from "../model/teacherModel.mjs";

export const create = async(req, res)=>{
    try {
        const teacherData = new Teacher(req.body);
        const {regId} = teacherData;
        const teacherExist = await Teacher.findOne({regId})
        if (teacherExist){
            return res.status(400).json({message : "teacher already exists."})
        }
        const savedteacher = await teacherData.save();
        res.status(200).json(savedteacher)
    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "})
    }
}

export const fetch = async (req, res)=>{
    try {
        const teacher = await Teacher.find();
        if(teacher.length === 0 ){
            return res.status(404).json({message : "Teachers not Found."})
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const teacherExist = await Teacher.findOne({_id:id})
        if (!teacherExist){
            return res.status(404).json({message : "teacher not found."})
        }
        const updateteacher = await Teacher.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateteacher);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const deleteTeacher = async (req, res)=>{
    try {
        const id = req.params.id;
        const teacherExist = await Teacher.findOne({_id:id})
        if(!teacherExist){
            return res.status(404).json({message : " Teacher Not Found. "})
        }
        await Teacher.findByIdAndDelete(id);
        res.status(201).json({message : " Teacher deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}