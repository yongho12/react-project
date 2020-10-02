const express = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../../config");
const { Case, User } = require("../../db/models");
const router = express.Router();


// getting Cases
router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const cases = await Case.findAll({
      include: User
    });
    return res.json({ cases });
  })
);



module.exports = router;
