//Fire up express server   - npm install express
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');   //for layouts : npm install express-ejs-layouts 

app.use(expressLayouts);       //MUST BE CALLED BEFORE ROUTES

//use express router
app.use('/', require('./routes'));        //home router

//set up the view engine
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