const express = require("express");
const route = express.Router();
const apiController = require("../controllers/ApiController");
const upload = require("../index");

route.post("/register", apiController.register);
route.post("/login", apiController.login);
route.post("/deleteaccount", apiController.deleteAccount);

module.exports = route;
