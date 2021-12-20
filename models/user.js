
//User Schema
const mongoose = require('mongoose');


//Create a Schema
const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true                  //email must be unique
    },
    password : {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    }
    
}, {
    timestamps: true
});

//Name of the collection in which it will be stored
const User = mongoose.model('User', userSchema);             //Collection name : Capital (by convention)

//export the collection
module.exports = User;


//Now, contact schema is created
// We need to require the schema inside the { index.js } file.