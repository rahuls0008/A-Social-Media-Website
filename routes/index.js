//create 
const express = require('express');  

const router = express.Router();





//Access the users controller
const homeController = require('../controllers/home_controller');

//Map a route to usersController's profile function
router.get('/', homeController.home);

//for any further routes, access from here 
//router.use('/routerName', require('./routerfile'));  

router.use('/users', require('./users'));      //Map it to users route index
router.use('/posts', require('./posts'));         //Map it to posts route index
router.use('/comments', require('./comments'));         //Map it to posts route index



module.exports = router;

console.log('router loaded');

// use express router in main index.js
// app.use('/', require('./routes'));



