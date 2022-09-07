const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require('../../utils/auth')

const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3")

const router = express.Router();


router.post(
  "/",
  singleMulterUpload("image"),
  asyncHandler(async function (req, res) {
    const photo = await db.Photo.create(req.body);
    const newPhotoUrl = await singlePublicFileUpload(req.file);
      return res.json(photo);
  })
);

module.exports = router;
