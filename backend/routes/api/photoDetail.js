const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models")

const router = express.Router();



// Photo Detail
router.get(`/:id`, asyncHandler(async function(req, res) {
    const photo = await db.Photo.one(req.params.id);
    console.log("PHOTO SELECTED ONE",photo)
    return res.json(photo);
}))



module.exports = router;
