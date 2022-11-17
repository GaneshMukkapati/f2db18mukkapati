var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var House_controller = require('../controllers/House'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// House ROUTES /// 
 
// POST request for creating a House.  
router.post('/Houses', House_controller.House_create_post); 
 
// DELETE request to delete House. 
router.delete('/Houses/:id', House_controller.House_delete); 
 
// PUT request to update House. 
router.put('/Houses/:id', House_controller.House_update_put); 
 
// GET request for one House. 
router.get('/Houses/:id', House_controller.House_detail); 
 
// GET request for list of all House items. 
router.get('/Houses', House_controller.House_list); 
 
module.exports = router; 