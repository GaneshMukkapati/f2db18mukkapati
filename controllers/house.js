var House = require('../models/house'); 
 
// List of all Costumes 
exports.house_list = async function(req, res) { 
    try{ 
        theHouses = await House.find(); 
        res.send(theHouses); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// for a specific Costume. 
exports.house_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: House detail: ' + req.params.id); 
}; 
exports.house_view_all_Page = async function(req, res) { 
    try{ 
        theHouses = await House.find(); 
        res.render('House', { title: 'Costume Search Results', results: theHouses }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.house_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new House(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.House_Name = req.body.House_Name; 
    document.Housing_Company = req.body.Housing_Company; 
    document.Housing_Company_Rating = req.body.Housing_Company_Rating; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle Costume delete form on DELETE. 
exports.house_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: House delete DELETE ' + req.params.id); 
}; 
 
// Handle House update form on PUT. 
exports.house_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: House update PUT' + req.params.id); 
}; 