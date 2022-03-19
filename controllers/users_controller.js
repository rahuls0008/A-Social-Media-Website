
//import user schema
const User = require('../models/user');

//Actions

// render the user > profile page
module.exports.profile = function(req, res){
    // return res.end('<h1>  User Profile   </h1>');
    return res.render('user_profile',{
        title : "User profile"
    });
}

// render the sign up page
module.exports.signUp = function(req, res){

    //restrict the accessibilty of sign-up page to only when user is signed out
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title : "Codeial | Sign Up"
    });
}

// render the sign in page
module.exports.signIn = function(req, res){

    //restrict the accessibilty of sign-in page to only when user is signed out
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title : "Codeial | Sign In"
    });
}


//get the sign up data
module.exports.create = function(req, res){
    //if password do not matches confirm_password
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    //check if email is unique
    User.findOne({email: req.body.email}, function(err, user){
        if(err){   console.log('Error in finding the user while signing up');   }

        //Unique User - create user
        if(!user){
            User.create(req.body, function(err, user){
                if(err){   console.log('Error in creating the user while signing up');   }

                //otherwise, user is created
                return res.redirect('/users/sign-in');
            });
        
        }else{             //User Already Exists
            return res.redirect('back');
        }
    });
}

//sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');       //to the home page
}


//sign out and destroy session for the user
module.exports.destroySession = function(req, res){
    req.logout();  //property of passportJS
    return res.redirect('/');
}