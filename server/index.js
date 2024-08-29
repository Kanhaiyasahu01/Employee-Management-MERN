const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();
const dbConnect = require("./config/database")

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());


const employeeRoutes = require('./routes/employee.routes');

app.use("/api/v1",employeeRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})
app.get("/",(req,res)=>{
    res.send("This is the home page");
})


dbConnect();


