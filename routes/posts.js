const express = require('express');  
const router = express.Router();
const passport = require('passport');

//Access the posts controller
const postsController = require('../controllers/posts_controller');

//Map a route to postsController's create function
router.post('/create', passport.checkAuthentication, postsController.create);




module.exports = router;
