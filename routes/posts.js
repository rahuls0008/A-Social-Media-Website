const express = require('express');  
const router = express.Router();


//Access the posts controller
const postsController = require('../controllers/posts_controller');

//Map a route to postsController's create function
router.post('/create',  postsController.create);




module.exports = router;
