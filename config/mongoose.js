//npm install mongoose

//connecting to mongoDB using mongoose  //read mongoose docs
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/codeial_development');

//acquire the connection (to check if it is successfull)
const db = mongoose.connection;         //db to access the database

//if error
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

//up and running 
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


//export the module
module.exports = db;