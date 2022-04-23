const { Router } = require("express");
const { courseService } = require("../backend/courseService");

function getAssignmentRoutes() {
  const router = Router();
  router.route("/")
    .get("/all", getAllAssignments)
    .get("/current", getCurrentAssignment)
    .post(addNewAssignment)
    .put(updateCurrentAssignment)
    .delete(deleteCurrentAssignment);
  return router;
}

async function getAllAssignments(req, res) {
  const assignments = await courseService.getAssignments();
  return res.json(assignments).status(200);
}

async function getCurrentAssignment(req, res) {
  const id = req.body.id;
  const assignmentInfo = await courseService.getCurrentAssignment({ id });
  return res.json(assignmentInfo).status(200);
}

async function deleteCurrentAssignment(req, res) {
  const id = req.body.id;
  await courseService.deleteAssignment({ id });
  return res.status(200);
}

async function updateCurrentAssignment(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const tutorId = req.body.tutorId;
    const studentId = req.body.studentId;
    const moduleCode = req.body.moduleCode;
    await courseService.updateCurrentAssignment({ id, title, description, tutorId, studentId, moduleCode });
    return res.status(200);
}

async function addNewAssignment(req, res) {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const tutorId = req.body.tutorId;
  const studentId = req.body.studentId;
  const moduleCode = req.body.moduleCode;
  await courseService.addNewAssignment({ id, title, description, tutorId, studentId, moduleCode });
  return res.status(200);
}

/*async function subtract(req, res) {
  const difference = Number(req.query.a) - Number(req.query.b);
  res.send(difference.toString());
}*/

module.exports = { getAssignmentRoutes };
