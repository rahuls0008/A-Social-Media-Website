//Fire up express server   - npm install express
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');   //for layouts : npm install express-ejs-layouts 
const db = require('./config/mongoose');
//used for session cookie [passport.js]
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


//tell the app to use it
app.use(express.urlencoded());
app.use(cookieParser());


//use Layouts
app.use(expressLayouts);       //LAYOUTS MUST BE CALLED BEFORE ROUTES


//use static files
app.use(express.static('./assets'));

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);






//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name: 'codeial',
    //TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge:(1000 * 60 * 100)                 //time after which cookie expires
    }
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


//use express router
app.use('/', require('./routes'));        //home router

//listen to the port
app.listen(port, function(err){
    if(err){
        // console.log('Error : ', err);
        console.log(`Error in running the server : ${err}`);
    }
    //otherwise
    console.log(`Server is running on port : ${port}`);
})