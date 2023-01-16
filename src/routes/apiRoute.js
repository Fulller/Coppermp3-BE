const express = require("express");
const route = express.Router();
const apiController = require("../controllers/ApiController");
const upload = require("../index");

route.post("/register", apiController.register);
route.post("/login", apiController.login);
route.post("/deleteaccount", apiController.deleteAccount);
route.post("/getSong", apiController.getSong);
route.post("/getDetailPlaylist", apiController.getDetailPlaylist);
route.post("/getHome", apiController.getHome);
route.post("/getTop100", apiController.getTop100);
route.post("/getChartHome", apiController.getChartHome);
route.post("/getNewReleaseChart", apiController.getNewReleaseChart);
route.post("/getInfoSong", apiController.getInfoSong);
route.post("/getArtist", apiController.getArtist);
route.post("/getLyric", apiController.getLyric);
route.post("/search", apiController.search);
route.post("/getListMV", apiController.getListMV);
route.post("/getCategoryMV", apiController.getCategoryMV);
route.post("/getVideo", apiController.getVideo);
route.post("/updateUser", apiController.updateUser);
route.post("/adduserfb", apiController.adduserfb);
route.get("/getalluserfb", apiController.getalluserfb);

module.exports = route;
