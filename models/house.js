const mongoose = require("mongoose") 
const HouseSchema = mongoose.Schema({ 
    House_Name: {type: String,required: [true, 'Name of the House cannot be empty']}, 
    Housing_Company: {type: String,required: [true, 'House company cannot be empty']},
    Housing_Company_Rating: {type: Number,required: [true, 'House company rating cannot be empty']},
}) 
 
module.exports = mongoose.model("House", HouseSchema) 