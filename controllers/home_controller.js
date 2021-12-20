//Controller is group of actions bundled together

//module.export.actionName = function(req, res){ -------------  }

//Make Router accessing home controller [in router > index.js]
            // const homeController = require('../controllers/home_controller');
            // router.get('/', homeController.actionName);



//Home Action
module.exports.home = function(req, res){
    // return res.end('<h1>  Express is up for Codeal   </h1>');
    console.log(req.cookies);
  
    
    
    return res.render('home',{
        title : "home"
    });
}


