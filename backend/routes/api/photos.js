const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models")

const router = express.Router();

router.get("/", asyncHandler(async function(req, res) {
    const photos = await db.Photo.findAll({});

    return res.json(photos);
}))

router.get(`/:id`, asyncHandler(async function(req, res) {
    const photo = await db.Photo.findByPk(req.params.id, {
        include: { model: db.User }
    });
    console.log("PHOTO SELECTED ONE", photo)
    return res.json(photo);
}))

module.exports = router;
