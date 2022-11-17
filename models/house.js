const mongoose = require("mongoose") 
const HouseSchema = mongoose.Schema({ 
    House_Name: String, 
    Housing_Company: String,
    Housing_Company_Rating: Number,
}) 
 
module.exports = mongoose.model("House", HouseSchema) 