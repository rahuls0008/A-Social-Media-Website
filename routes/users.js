const express = require('express');  
const router = express.Router();
const passport = require('passport');

//Access the users controller
const usersController = require('../controllers/users_controller');

//Map a route to usersController's profile function
router.get('/profile', passport.checkAuthentication, usersController.profile);


router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
 
router.post('/create', usersController.create);   //POST Data

//use passport as Middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),usersController.createSession);


module.exports = router;
// use express router in main index.js
// app.use('/users', require('./users'));