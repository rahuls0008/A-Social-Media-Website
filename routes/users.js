const express = require('express');  

const router = express.Router();

//Access the users controller
const usersController = require('../controllers/users_controller');

//Map a route to usersController's profile function
router.get('/profile', usersController.profile);
 


module.exports = router;
// use express router in main index.js
// app.use('/users', require('./users'));