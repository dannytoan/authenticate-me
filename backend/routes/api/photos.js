const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models")

const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation');
// const { restoreCSRF } = require('../../../frontend/src/store/csrf');

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
    .isLength({ min:5, max: 256})
    .withMessage('Title must contain at least 5 and no more than 256 characters.'),

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

router.delete("/:id", asyncHandler(async function (req, res) {
    // const id = await db.Photo.destroy(req.params.id);
    // return res.json({ id })
    const deletePhoto = await db.Photo.findByPk(req.params.id);

    if (deletePhoto !== undefined || deletePhoto !== null) {
        await deletePhoto.destroy();
    }

    res.json({
        message: "Look successfully deleted"
    })
}))

module.exports = router;
