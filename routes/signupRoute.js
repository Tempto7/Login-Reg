const express = require("express");
const {
  getSignupPage,
  storeSignupData,
} = require("../controller/signupController");

const router = express.Router();

router.get("/", getSignupPage);

router.post("/", storeSignupData);

module.exports = router;