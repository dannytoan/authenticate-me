const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require('../../utils/auth')


const router = express.Router();


// VALIDATE SUBMITTING A PHOTO
const validatePostPhoto = [
  check("imageUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an Image URL.")
    .isURL({ checkFalsy: true })
    .withMessage("Please provide a valid Image URL."),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a title.")
    .isLength({ min: 1, max: 256 })
    .withMessage(
      "Title must contain at least 1 and no more than 256 characters."
    ),

  handleValidationErrors,
];

router.post(
  "/",
  validatePostPhoto, requireAuth,
  asyncHandler(async function (req, res) {
    const photo = await db.Photo.build(req.body);

    await photo.save();

    if (photo) {
      return res.json(photo);
    }
  })
);

module.exports = router;
