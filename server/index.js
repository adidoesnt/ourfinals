const express = require("express");
const { getRoutes } = require("./routes");

function startServer() {
  const app = express();
  app.use("/", getRoutes());
  app.listen(3000);
}
startServer();
