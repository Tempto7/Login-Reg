const express = require("express");
const { getLoginPage, loginOfUser } = require("../controller/loginController");

const router = express.Router();

router.get("/", getLoginPage);
router.post("/",loginOfUser);

module.exports = router;
