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
  singleMulterUpload("imageUrl"),
  asyncHandler(async function (req, res) {


    const newPhotoUrl = await singlePublicFileUpload(req.file);
    // const photo = await db.Photo.create(req.body);
    const photo = await db.Photo.create({
      id: req.body.id,
      collectionId: req.body.collectionId,
      userId: req.body.userId,
      imageUrl: newPhotoUrl,
      description: req.body.description
    });

    console.log("================HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO=========================", newPhotoUrl)


    return res.json(photo);
  })
);

module.exports = router;
