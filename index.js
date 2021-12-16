//Fire up express server   - npm install express
const express = require('express');
const app = express();
const port = 8000;

//listen to the port
app.listen(port, function(err){
    if(err){
        // console.log('Error : ', err);
        console.log(`Error in running the server : ${err}`);
    }
    //otherwise
    console.log(`Server is running on port : ${port}`);
})