const express = require('express');  

const router = express.Router();

//Access the users controller
const usersController = require('../controllers/users_controller');

//Map a route to usersController's profile function
router.get('/profile', usersController.profile);


router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
 
router.post('/create', usersController.create);   //POST Data


module.exports = router;
// use express router in main index.js
// app.use('/users', require('./users'));