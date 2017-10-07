const router = require('express').Router();
const tokenCheck = require('../middleware/tokenCheck')

// This is the critical part of the middleware! Here we are
// telling express to use our tokenCheck for every route defined
// on this router, which gives us a lot of flexibility
router.use(tokenCheck);

router.get('/users', (req, res)=>{
    res.json([1, 2, 3, 4, 5, 6]);
});

module.exports = router;