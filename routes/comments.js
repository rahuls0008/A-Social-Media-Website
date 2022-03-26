const express = require('express');  
const router = express.Router();
const passport = require('passport');

//Access the comments controller
const commentsController = require('../controllers/comments_controller');

//Map a route to commentsController's create function
router.post('/create', passport.checkAuthentication, commentsController.create);




module.exports = router;
