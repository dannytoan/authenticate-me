const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();

// VALIDATE SUBMITTING A PHOTO

const validatePostPhoto = [
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Image URL.')
    .isLength({ min: 1 })
    .withMessage('Image URL must be more than 1 character.')
    .isURL({ checkFalsy: true})
    .withMessage('Please provide a valid Image URL.'),
  check('description')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a title.')
    .isLength({ min:5, max: 256})
    .withMessage('Title must contain at least 5 and no more than 256 characters.'),

    handleValidationErrors
]

router.post(
  "/",
  validatePostPhoto,
  asyncHandler(async function (req, res) {
    const photo = await db.Photo.create(req.body);

    // await photo.save();

    // if(photo) {
    //   return res.json(photo);
    // }
      return res.json(photo);
  })
);

module.exports = router;
