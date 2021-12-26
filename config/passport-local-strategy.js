const passport =  require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//authentication using passport   - finding user and authenticating it
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user) {
            if(err){
                console.log('Error in finding user --> Passport');
                return done(err);
            }

            
            if(!user || user.password != password){
                console.log('Invalid Username/Password')
                return done(null, false);
            }

            return done(null, user);

        });
    }

));


// serializing the user to decide which key is to be kept in cookies    - find which property to be sent to the cookie
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// deserializing the user from the key in the cookies           
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);           //null : no error  , user : because user is found
    });
});




//Export the module
module.exports = passport;