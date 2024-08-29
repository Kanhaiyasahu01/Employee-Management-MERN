const express = require("express")
const router = express.Router();


const {createEmployee,getAllEmployee,getEmployee,updateEmployee,deleteEmployee} = require("../controller/employee.controllers")


// map api routes

router.post("/create",createEmployee);

router.get("/getAllEmployee",getAllEmployee);

router.get('/getEmployee/:id',getEmployee);

router.put("/updateEmployee/:id",updateEmployee);

router.delete("/deleteEmployee/:id",deleteEmployee)


module.exports = router;