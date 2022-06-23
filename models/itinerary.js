const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    itineraryName: {type:String, required:true},
    userName: {type:String, required:true},
    userPhoto: {type:String, required:true},
    price: {type:String, required:true},
    time: {type:String, required:true},
    tags: {type:Array, required:true},
    likes: {type:String, required:true},
    city:{type: mongoose.Types.ObjectId , ref:'cities'}
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary