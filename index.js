//Fire up express server   - npm install express
const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'));        //home router

app.set('view engine', 'ejs');
app.set('views', './views');

//listen to the port
app.listen(port, function(err){
    if(err){
        // console.log('Error : ', err);
        console.log(`Error in running the server : ${err}`);
    }
    //otherwise
    console.log(`Server is running on port : ${port}`);
})