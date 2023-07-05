const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./secrets/.env" });
require("./config/dbConnect");
const port = process.env.PORT || 4000;

const app = express();
const viewDirectory = path.join(__dirname,"./views")

app.set("view engine", "hbs");
app.set("views", viewDirectory);

app.get("/",(req,res)=>{
    res.render("Home.hbs");
})
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
