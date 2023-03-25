const express = require("express");
const router = express.Router();
const { signin } = require("../controllers/auth/signInController");
const { signup } = require("../controllers/auth/signUpController");
const {getuserbytoken}= require("../controllers/user/getUserbytokencontroller");

router.get("/getbytoken", getuserbytoken);
router.post("/signUp", signup);
router.post("/signIn", signin);
module.exports = router;
