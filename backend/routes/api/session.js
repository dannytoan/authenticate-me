const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

// LOGIN
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    // call the login static method from the User model
    const user = await User.login({ credential, password });

    // If there is a user returned from the login static method,
    // call setTokencookie and return a JSON response with the user info.
    // otherwise, return an error "Login failed"
    if (!user) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);


// LOGOUT
router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});


// RESTORE SESSION USER
    // to get the session user, connect the restoreUser middleware
router.get("/", restoreUser, (req, res) => {
    // returns the session user as JSON under the key of user.
  const { user } = req;

  // if no session, return a JSON empty object.
  if (user) {
    return res.json({
      user: user.toSafeObject(),
    });
  } else return res.json({});
});

module.exports = router;
