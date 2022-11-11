var house = require('../models/house');
// List of all Costumes
exports.house_list = function(req, res) {
 res.send('NOT IMPLEMENTED: house list');
};
// for a specific Costume.
exports.house_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await house.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle Costume create on POST.
exports.house_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: house create POST');
};
// Handle Costume delete form on DELETE.
exports.house_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: house delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.house_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await house.findById( req.params.id)
    // Do updates of properties
    if(req.body.House_Name)
    toUpdate.House_Name = req.body.House_Name;
    if(req.body.Housing_Company) toUpdate.Housing_Company = req.body.Housing_Company;
    if(req.body.Housing_Company_Rating) toUpdate.Housing_Company_Rating = req.body.Housing_Company_Rating;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// VIEWS

   // List of all Costumes
exports.house_list = async function(req, res) {
    try{
    thehouse = await house.find();
    res.send(thehouse);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.house_view_all_Page = async function(req, res) {
    try{
    thehouse = await house.find();
    res.render('house', { title: 'house Search Results', results: thehouse });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.house_create_post = async function(req, res) {
    console.log(req.body)
    let document = new house();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.monkeyAge = req.body.monkeyAge;
    document.monkeyName = req.body.monkeyName;
    document.monkeyBreed = req.body.monkeyBreed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}