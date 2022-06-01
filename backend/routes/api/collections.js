const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models")

const router = express.Router();


router.get("/", asyncHandler(async function(req, res) {
    const collections = await db.Collection.findAll({include: db.Photo});

    return res.json({collections})
}))

router.get("/:id", asyncHandler(async function(req, res) {
    const collection = await db.Collection.findByPk(req.params.id, {
        include: { model: db.User }
    });

    return res.json(collection);
}))


module.exports = router;
