const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const db = require('../../db/models')

const {check} = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation');


// Comments
router.get(
    "/",
    asyncHandler(async function (req, res) {
      const comment = await db.Comment.findAll({
        include: db.User,
      });
      return res.json({comment});
    })
  );


  module.exports = router;
