const { Router } = require("express");
const { courseService } = require("../backend/courseService");

function getAssignmentRoutes() {
  const router = Router();
  router.get("/", getAllAssignments);
  return router;
}

async function getAllAssignments(req, res) {
  const assignments = await courseService.getAssignments();
  return res.json(assignments).status(200);
}

async function subtract(req, res) {
  const difference = Number(req.query.a) - Number(req.query.b);
  res.send(difference.toString());
}

module.exports = { getAssignmentRoutes };
