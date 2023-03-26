const express = require("express");
const helmet = require("helmet");

const authroute = require("./routes/authroute");
const projectroute = require("./routes/projectroute");
const clientroute = require("./routes/clientroute");
const employeeroute = require("./routes/employeeroute");

const app = express();

app.use(express.json());
app.use(helmet())

app.use(authroute);
app.use(projectroute);
app.use(clientroute);
app.use(employeeroute);

module.exports = app;