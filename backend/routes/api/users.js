const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


// VALIDATE SIGNUP
const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];


// SIGN UP
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;

        // The signup static method is called on the User model
        const user = await User.signup({ email, username, password });

        // if the user is successfully created, call setTokenCookie and return a JSON response
            // with the user info.
        // if unsuccessful, a Sequelize Validation error will be passed onto the next error handling middleware.
        await setTokenCookie(res, user);

        return res.json({
            user
        });
    })
);

module.exports = router;
