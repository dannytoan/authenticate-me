const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models")

const router = express.Router();


router.get("/", asyncHandler(async function(req, res) {
    const collections = await db.Collection.findAll({include: db.Photo});

    return res.json({collections})
}))


module.exports = router;
