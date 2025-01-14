import Course from "../model/courseModel.mjs";

export const create = async(req, res)=>{
    try {
        const courseData = new Course(req.body);
        const {regId} = courseData;
        const courseExist = await Course.findOne({regId})
        if (courseExist){
            return res.status(400).json({message : "course already exists."})
        }
        const savedcourse = await courseData.save();
        res.status(200).json(savedcourse)
    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "})
    }
}

export const fetch = async (req, res)=>{
    try {
        const course = await Course.find();
        if(course.length === 0 ){
            return res.status(404).json({message : "courses not Found."})
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const courseExist = await Course.findOne({_id:id})
        if (!courseExist){
            return res.status(404).json({message : "course not found."})
        }
        const updatecourse = await Course.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updatecourse);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const deletecourse = async (req, res)=>{
    try {
        const id = req.params.id;
        const courseExist = await Course.findOne({_id:id})
        if(!courseExist){
            return res.status(404).json({message : " course Not Found. "})
        }
        await Course.findByIdAndDelete(id);
        res.status(201).json({message : " course deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}