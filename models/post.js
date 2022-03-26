
//Post Schema
const mongoose = require('mongoose');


//Create a Schema
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {                 // ************ Link the post  to User ********
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'     // refer to User Schema
    }
}, {
        timestamps: true
});


//Name of the collection in which it will be stored
const Post = mongoose.model('Post', postSchema);             //Collection name : Capital (by convention)

//export the collection
module.exports = Post;


//Now, post_schema is created
