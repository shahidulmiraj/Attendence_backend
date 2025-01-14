import Department from "../model/departmentModel.mjs";

export const create = async(req, res)=>{
    try {
        const departmentData = new Department(req.body);
        const {name} = departmentData;
        const departmentExist = await Department.findOne({name})
        if (departmentExist){
            return res.status(400).json({message : "Department already exists."})
        }
        const saveddepartment = await departmentData.save();
        res.status(200).json(saveddepartment)
    } catch (error) {
        res.status(500).json({error : " Server Error. "})
    }
}

export const fetch = async (req, res)=>{
    try {
        const department = await Department.find();
        if(department.length === 0 ){
            return res.status(404).json({message : "departments not Found."})
        }
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const departmentExist = await Department.findOne({_id:id})
        if (!departmentExist){
            return res.status(404).json({message : "department not found."})
        }
        const updatedepartment = await Department.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updatedepartment);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const deletedepartment = async (req, res)=>{
    try {
        const id = req.params.id;
        const departmentExist = await Department.findOne({_id:id})
        if(!departmentExist){
            return res.status(404).json({message : " department Not Found. "})
        }
        await department.findByIdAndDelete(id);
        res.status(201).json({message : " department deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}