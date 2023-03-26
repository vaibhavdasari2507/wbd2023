const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const { addclient } = require("../controllers/clients/addClientcontroller");
const { getclient } = require("../controllers/clients/getClientcontroller");
const { deleteclient } = require("../controllers/clients/deleteClientcontroller");
const { editclient } = require("../controllers/clients/editClientcontroller");

let logStream = fs.createWriteStream(path.join(__dirname, "output.log"), {
    flags: "a",
});
router.use(
    morgan("combined", {
        stream: logStream,
    })
);
router.use(cors());
router.post("/addclient/:id", addclient);
router.get("/getclient/:id", getclient);
router.get("/deleteclient/:id", deleteclient);
router.post("/editclient/:id", editclient);
module.exports = router;
