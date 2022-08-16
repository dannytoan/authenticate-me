const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js')
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const photosRouter = require('./photos')
const addLookRouter = require('./addLook')
const collectionsRouter = require('./collections')
const commentsRouter = require('./comments')


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/photos', photosRouter);

router.use('/photos/new', addLookRouter);

router.use('/collections', collectionsRouter);

router.use('/comments', commentsRouter)



router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});



// Test route - if there is no user, the route will return an error
    // otherwise it will return the session user's information
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
          username: 'Demo-lition'
        }
      });
    setTokenCookie(res, user);
    return res.json({ user });
  }));

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


// router.get("/photos", asyncHandler(async function(req, res) {
//     res.send("hi")
// }))

module.exports = router;
