var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('House', { title: 'Search Results House' });
});
var express = require('express');
const House_controllers= require('../controllers/House');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET House */
router.get('/', House_controllers.House_view_all_Page );
/* GET detail House page */ 
router.get('/detail',secured, House_controllers.House_view_one_Page); 
router.get('/create',secured, House_controllers.House_create_Page); 
router.get('/update',secured, House_controllers.House_update_Page);
router.get('/delete',secured, House_controllers.House_delete_Page);
module.exports = router;