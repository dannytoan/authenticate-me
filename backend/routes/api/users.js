const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


// SIGN UP
router.post(
    '/',
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
