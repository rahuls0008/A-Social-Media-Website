
//Comment Schema
const mongoose = require('mongoose');


//Create a Schema
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {                 // ************ Link the comment  to a User ********
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'     // refer to User collection
    },
    post: {                 // ************ Link the comment  to a Post ********
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Post'     // refer to Post collection
    }
}, {
        timestamps: true
});


//Name of the collection in which it will be stored
const Comment = mongoose.model('Comment', commentSchema);             //Collection name : Capital (by convention)

//export the collection
module.exports = Comment;


//Now, post_schema is created
