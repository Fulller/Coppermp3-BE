const express = require("express");
const route = express.Router();
const ApiControllerV2 = require("../controllers/ApiControllerV2.js");

route.post("/register", ApiControllerV2.register);
route.post("/login", ApiControllerV2.login);
route.post("/deleteaccount", ApiControllerV2.deleteAccount);
route.post("/updateUser", ApiControllerV2.updateUser);
route.get("/getSong", ApiControllerV2.getSong);
route.get("/getDetailPlaylist", ApiControllerV2.getDetailPlaylist);
route.get("/getHome", ApiControllerV2.getHome);
route.get("/getTop100", ApiControllerV2.getTop100);
route.get("/getChartHome", ApiControllerV2.getChartHome);
route.get("/getNewReleaseChart", ApiControllerV2.getNewReleaseChart);
route.get("/getInfoSong", ApiControllerV2.getInfoSong);
route.get("/getArtist", ApiControllerV2.getArtist);
route.get("/getLyric", ApiControllerV2.getLyric);
route.get("/search", ApiControllerV2.search);
route.get("/getListMV", ApiControllerV2.getListMV);
route.get("/getCategoryMV", ApiControllerV2.getCategoryMV);
route.get("/getVideo", ApiControllerV2.getVideo);

module.exports = route;
