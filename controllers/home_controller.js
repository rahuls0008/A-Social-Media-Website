//Controller is group of actions bundled together

//module.export.actionName = function(req, res){ -------------  }

//Make Router accessing home controller [in router > index.js]
            // const homeController = require('../controllers/home_controller');
            // router.get('/', homeController.actionName);


//import post schema
const Post = require('../models/post');



//Home Action
module.exports.home = function(req, res){
    // return res.end('<h1>  Express is up for Codeal   </h1>');
    // console.log(req.cookies);
    

    // display the Posts

    // Post.find({}, function(err, posts){                       //find({query}) - find all posts from db
    //     return res.render('home',{
    //         title : "Codeial | home",
    //         posts : posts          //pass the posts to home page
    //     });
    // });


    // display the posts & related user

    //find({}) - find all posts from db  > populate the user of each post 
                                        // (because we only had "user : user_id" in db > we populate user to get all other user values(name etc.))
    // Post.find({}).populate('user').exec(function(err, posts){    
    //     return res.render('home',{
    //         title : "Codeial | home",
    //         posts : posts          //pass the posts to home page
    //     });
    // });

    Post.find({})
    .populate('user')          //can refer Documentation
    .populate({
        path: 'comments',
        populate:{    //further Populate
            path: 'user'          // & we can keep on nesting (this is the way...)
        }
    })
    .exec(function(err, posts){    
        return res.render('home',{
            title : "Codeial | home",
            posts : posts          //pass the posts to home page
        });
    });
    


    // return res.render('home',{
    //     title : "home"
    // });
}


