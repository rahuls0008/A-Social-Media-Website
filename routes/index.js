//create 
const express = require('express');  

const router = express.Router();

//Router accessing home controller
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);


module.exports = router;

console.log('router loaded');

// use express router in main index.js
// app.use('/', require('./routes'));



