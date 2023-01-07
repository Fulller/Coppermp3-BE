const path = require("path");
const express = require("express");
const morgan = require("morgan");
const db = require("./config/db");
const cors = require("cors");
const { ZingMp3 } = require("zingmp3-api-full");
const route = require("./routes");
const multer = require("multer");
const { port } = require("./config");

db.connect();
const app = express();
app.use(express.static("./public"));
app.use(cors({ origin: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));
route(app);
let fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
let upload = multer({
  storage: fileStorage,
});
app.post("/api/uploadImage", upload.single("image"), (req, res) => {
  let pathIamge = "https://zingmp3-fpci.onrender.com/" + req.file.path.slice(6);
  pathIamge = pathIamge.replace("\\", "/");
  res.json(pathIamge);
});
app.listen(port, () => {
  console.log(`RUNING IN PORT ${port}`);
});

module.exports = { port };
