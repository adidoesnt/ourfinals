const { Router } = require("express");
const { userService } = require("../backend/userService");

function getUserRoutes() {
  const router = Router();
  router.route("/")
    .get(getCurrentUserInfo)
    .post(addNewUser)
    .put(updateCurrentUserInfo)
    .delete(deleteCurrentUser);
  return router;
}

async function getCurrentUserInfo(req, res) {
    const id = req.body.id;
    const userInfo = await userService.getUser({ id });
    return res.json(userInfo).status(200);
}

async function deleteCurrentUser(req, res) {
    const id = req.body.id;
    await userService.deleteUser({id});
    return res.status(200);
}

async function updateCurrentUserInfo(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const year = req.body.year;
    const faculty = req.body.faculty;
    const nusnetId = req.body.nusnetId;
    await userService.updateProfile({ id, name, year, faculty, nusnetId });
    return res.status(200);
}

async function addNewUser(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const year = req.body.year;
    const faculty = req.body.faculty;
    const nusnetId = req.body.nusnetId;
    await userService.createUser({id, name, year, faculty, nusnetId });
    return res.status(200);
}

/*async function subtract(req, res) {
  const difference = Number(req.query.a) - Number(req.query.b);
  res.send(difference.toString());
}*/

module.exports = { getUserRoutes };
