var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('House', { title: 'Search Results for House Class' });
});
var express = require('express'); 
const house_controlers= require('../controllers/house'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', house_controlers.house_view_all_Page ); 
module.exports = router; 
module.exports = router;

