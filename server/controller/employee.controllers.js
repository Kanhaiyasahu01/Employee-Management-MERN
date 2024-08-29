// create employee
const Employee = require("../model/employee.model")

exports.createEmployee = async(req,res)=>{
    try{
        const {name,email,position,department,salary} = req.body;

        if(!name || !email || !position || !department || !salary)
        {
            return res.status(400).json({
                success:false,
                message:"All field are required",
            })
        }
    
        const existingUser = await Employee.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        // create new user,
        const user = await Employee.create({name,email,position,department,salary});
    
        res.status(200).json({
            success:true,
            message:"Employee created successfully",
            data:user
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


exports.getAllEmployee  = async(req,res)=>{
    try{
        const allEmployee = await Employee.find({});
        res.status(200).json({
            success:true,
            message:"All employee fetched successfully",
            data:allEmployee
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


exports.getEmployee = async(req,res)=>{
    try{
        const {id} = req.params;
        const employee = await Employee.findById(id);

        res.status(200).json({
            success:true,
            message:"Single employee fetched",
            data:employee,
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


exports.updateEmployee = async(req,res)=>{
    try{    
        const {name,email,position,department,salary} = req.body;
        const {id} = req.params;

        const employee = await Employee.findByIdAndUpdate(id,
            {
                name,email,position,department,salary

            },
            {new:true}
        );

        res.status(200).json({
            success:true,
            message:"Employee updated successfully",
            employee,
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


exports.deleteEmployee = async(req,res)=>{
    try{
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Employee deleted successfully",
            data:employee,
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}