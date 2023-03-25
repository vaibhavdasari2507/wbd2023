const express = require("express");
const router = express.Router();
const { addemployee } = require("../controllers/employees/addEmployeecontroller");
const { getemployee } = require("../controllers/employees/getEmployeecontroller");
const { deleteemployee } = require("../controllers/employees/deleteEmployeecontroller");
const { editemployee } = require("../controllers/employees/editEmployeecontroller");

router.post("/addemployee/:id", addemployee);
router.get("/getemployee/:id", getemployee);
router.get("/deleteemployee/:id", deleteemployee);
router.post("/editemployee/:id", editemployee);

module.exports = router;
