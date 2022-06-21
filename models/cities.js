const mongoose = require('mongoose') 

const citySchema = new mongoose.Schema({ 
    
    name: {type:String, required:true}, 
    country: {type:String, required:true},
    description: {type:String, required:true},
    caruselImg: {type:String, required:true},
    detailImg1: {type:String, required:true},
    detailImg2: {type:String, required:true},
    detailImg3: {type:String, required:true}, 
})

const City = mongoose.model('cities', citySchema)
module.exports = City 