const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");

dotenv.config({ path: "./secrets/.env" });
require("./config/dbConnect");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
const viewDirectory = path.join(__dirname,"./views")

app.set("view engine", "hbs");
app.set("views", viewDirectory);

app.get("/",(req,res)=>{
    res.render("Home.hbs");
})
app.get("/error",(req,res)=>{
  res.render("Error.hbs");
})
app.use("/signup",signupRoute);
app.use("/login",loginRoute);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
 
