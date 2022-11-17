var House = require('../models/House');
// List of all Houses
exports.House_list = function (req, res) {
    res.send('NOT IMPLEMENTED: House list');
};
// for a specific House.
exports.House_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await House.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle House create on POST.
exports.House_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: House create POST');
};
// Handle House delete form on DELETE.
exports.House_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: House delete DELETE ' + req.params.id);
};
// Handle House update form on PUT.
exports.House_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await House.findById(req.params.id)
        // Do updates of properties
        if (req.body.House_Name)
            toUpdate.House_Name = req.body.House_Name;
        if (req.body.Housing_Company) toUpdate.Housing_Company = req.body.Housing_Company;
        if (req.body.Housing_Company_Rating) toUpdate.Housing_Company_Rating = req.body.Housing_Company_Rating;
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

// List of all Houses
exports.House_list = async function (req, res) {
    try {
        theHouse = await House.find();
        res.send(theHouse);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.House_view_all_Page = async function (req, res) {
    try {
        theHouse = await House.find();
        res.render('House', { title: 'House Search Results', results: theHouse });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle House create on POST.
exports.House_create_post = async function (req, res) {
    console.log(req.body)
    let document = new House();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"House_type":"goat", "cost":12, "size":"large"}
    document.monkeyAge = req.body.monkeyAge;
    document.monkeyName = req.body.monkeyName;
    document.monkeyBreed = req.body.monkeyBreed;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// Handle House delete on DELETE. 
exports.House_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await House.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.House_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await House.findById(req.query.id)
        res.render('Housedetail',
            { title: 'House Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 
exports.House_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Housecreate', { title: 'House Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
exports.House_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await House.findById(req.query.id)
    res.render('Houseupdate', { title: 'House Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
exports.House_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await House.findById(req.query.id)
    res.render('Housedelete', { title: 'House Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };