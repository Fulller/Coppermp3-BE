const apiRoute = require("./apiRoute");
const apiV2 = require("./apiv2.js");

function route(app) {
  app.use("/api", apiRoute);
  app.use("/api/v2", apiV2);
}
module.exports = route;
