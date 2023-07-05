const userCollection = require("../models/userModel");

const getSignupPage = (req, res) => {
  res.render("Signup.hbs");
};

const storeSignupData = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await userCollection.create({ username, password });
    console.log("val of new user is:",newUser);
    // res.render("Login");
    res.redirect("/login");
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getSignupPage,
  storeSignupData,
};
