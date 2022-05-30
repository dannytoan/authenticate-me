const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const photo = await db.Photo.create(req.body);
    return res.json(photo);
  })
);

module.exports = router;
