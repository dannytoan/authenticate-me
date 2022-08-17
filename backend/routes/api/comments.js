const express = require("express");
const router = express();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

// Comments
router.get(
  "/",
  asyncHandler(async function (req, res) {
    const comment = await db.Comment.findAll({
      include: db.User,
    });
    return res.json({ comment });
  })
);

router.post(
  "/new",
  asyncHandler(async function (req, res) {
    const comment = await db.Comment.create(req.body);

    return res.json(comment);
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const { comment } = req.body;
    const updateComment = await db.Comment.findByPk(req.params.id);

    await updateComment.update({
      comment,
    });

    return res.json(updateComment);
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const deleteComment = await db.Comment.findByPk(req.params.id);

  if (deleteComment !== undefined || deleteComment !== null) {
    await deleteComment.destroy();
  }

  res.json({
    message: "Comment successfully deleted"
  })
}))

module.exports = router;
