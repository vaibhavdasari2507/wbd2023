const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const router = express.Router();
const { signin } = require("../controllers/auth/signInController");
const { signup } = require("../controllers/auth/signUpController");
const { getuserbytoken } = require("../controllers/user/getUserbytokencontroller");

let logStream = fs.createWriteStream(path.join(__dirname, "output.log"), {
    flags: "a",
});
router.use(
    morgan("combined", {
        stream: logStream,
    })
);

router.use(cors());
router.get("/getbytoken",getuserbytoken);
router.post("/signUp",signup);
router.post("/signIn", signin);

module.exports = router;
