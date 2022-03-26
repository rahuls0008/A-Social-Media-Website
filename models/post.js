
//Post Schema
const mongoose = require('mongoose');


//Create a Schema
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {                 // ************ Link the post to a User ********
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'     // refer to User collection
    },   
    comments:  [      // include the [ARRAY of IDs of all COMMENTS] in this Post schema itself
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Comment'     // refer to User collection
        }
    ]
}, {
        timestamps: true
});


//Name of the collection in which it will be stored
const Post = mongoose.model('Post', postSchema);             //Collection name : Capital (by convention)

//export the collection
module.exports = Post;


//Now, post_schema is created
