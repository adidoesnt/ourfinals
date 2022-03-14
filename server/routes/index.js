const { Router } = require("express");
const { getAssignmentRoutes } = require("./assignment");

function getRoutes() {
  const router = Router();

  router.use("/assignment", getAssignmentRoutes());

  return router;
}

module.exports = { getRoutes };
