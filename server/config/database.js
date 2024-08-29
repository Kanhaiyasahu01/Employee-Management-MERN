const mongoose = require("mongoose")
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB connection successfull")
    })
    .catch((err)=>{
        console.log("error while connecting to db")
        process.exit(1);
    })
}
module.exports = dbConnect;