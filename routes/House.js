var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('House', { title: 'Search Results House' });
});
var express = require('express');
const House_controllers= require('../controllers/House');
var router = express.Router();
/* GET House */
router.get('/', House_controllers.House_view_all_Page );
/* GET detail House page */ 
router.get('/detail', House_controllers.House_view_one_Page); 
router.get('/create', House_controllers.House_create_Page);
router.get('/update', House_controllers.House_update_Page);
router.get('/delete', House_controllers.House_delete_Page);
module.exports = router;