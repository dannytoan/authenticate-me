const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models")

const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();


const editPhotoValidators = [
    check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Image URL.')
    .isLength({ min: 1 })
    .isURL({ checkFalsy: true})
    .withMessage('Please provide a valid Image URL.'),
  check('description')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a title.')
    .isLength({ min:5, max: 50})
    .withMessage('Title must contain at least 5 and no more than 50 characters.'),

    handleValidationErrors
]



router.get("/", asyncHandler(async function(req, res) {
    const photos = await db.Photo.findAll({});

    return res.json(photos);
}))

router.get("/:id", asyncHandler(async function(req, res) {
    const photo = await db.Photo.findByPk(req.params.id, {
        include: { model: db.User }
    });
    console.log("PHOTO SELECTED ONE", photo)
    return res.json(photo);
}))

router.put("/:id", editPhotoValidators, asyncHandler(async function(req, res) {
    const { imageUrl, description } = req.body;
    const updatePhoto = await db.Photo.findByPk(req.params.id);

    await updatePhoto.update({
        imageUrl,
        description
    });

    return res.json(
        updatePhoto
    )
}))

module.exports = router;
