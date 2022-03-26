const { Router } = require("express");
const { userService } = require("../backend/userService");

function getUserRoutes() {
  const router = Router();
  router.get("/", getCurrentUserInfo);
  return router;
}

async function getCurrentUserInfo(req, res) {
  const userInfo = await userService.getCurrentUserInfo();
  return res.json(userInfo).status(200);
}

async function subtract(req, res) {
  const difference = Number(req.query.a) - Number(req.query.b);
  res.send(difference.toString());
}

module.exports = { getUserRoutes };
