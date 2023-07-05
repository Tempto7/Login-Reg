const userCollection = require("../models/userModel");

const getLoginPage = (req, res) => {
  res.render("Login.hbs");
};

const loginOfUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await userCollection.findOne({username});
    if(findUser && (await findUser.isPasswordMatched(password))){
        console.log("login successful");
        res.redirect("/");
    }else{
        res.redirect("/error");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getLoginPage,
  loginOfUser,
};
