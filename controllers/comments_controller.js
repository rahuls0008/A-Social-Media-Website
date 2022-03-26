//import post schema
const Comment = require('../models/comment');
const Post = require('../models/post');


module.exports.create = function(req, res){
    // check if Post exist  >  find if post_id(which we directly passed in the the Form) exist in Post DB  
    Post.findById(req.body.post, function(err, post){
        
        // if post exist
        if(post){
            //create comment
            Comment.create({
                content : req.body.content,
                post: req.body.post,
                user: req.user._id
            
            },function(err, comment){
                //handle Error


                post.comments.push(comment);    //The comment is pushed to post (it will autonatically fetch the post_id & push) 
                post.save();        // SAVE() - whenever we're Updating something
                                               //changes saved in the db (before this it is just in Memory(RAM))

                res.redirect('back');
            });
        }
    });
}