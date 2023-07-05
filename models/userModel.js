const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next){
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.isPasswordMatched = async function (enteredPassword){
    const isMatched = await bcrypt.compare(enteredPassword, this.password);
    return isMatched;
}

const userCollection = mongoose.model("User",userSchema);
module.exports = userCollection;