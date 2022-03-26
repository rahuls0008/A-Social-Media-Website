//import post schema
const Post = require('../models/post');

module.exports.create = function(req, res){
    
    //create post
    Post.create({
        content: req.body.content,
        user: req.user._id            //we need just ID  (not whole user object)
    }, function(err, post){
        if(err){  
            console.log('error in creating a post');
            return;
        }

        //otherwise
        return res.redirect('back');
    });
}