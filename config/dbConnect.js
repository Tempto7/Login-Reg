const mongoose = require("mongoose");

//mongoose.set("strictQuery",false);

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Database connected Successfully");
}).catch((error)=>{
    console.log("Error in mongodb connection and error is:",error);
})