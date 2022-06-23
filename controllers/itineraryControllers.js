const Itinerary = require('../models/itinerary')

const itinerariesControllers = {

    getItinerary : async (req, res) =>{
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find()
            .populate('cities')
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error
        })
    },

    getOneItinerary: async (req, res) => {
        let id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOne({_id: id})
        } catch (err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    addItinerary: async (req, res) =>{
        const {name, userName, userPhoto, price, time, tags, likes} = req.body
        let itinerary
        let error = null
        try{
            itinerary = await new Itinerary({
                name:name,
                userName:userName,
                userPhoto:userPhoto,
                price:price,
                time:time,
                tags:tags,
                likes:likes
            }).save()
        } catch(err){
            error = err
        }
        res.json({
            response: error ? error : itinerary,
            success: error? false : true,
            error: error
        })

    },

    modifyItinerary: async (req, res) =>{
        const id = req.params.id
        let itinerary = req.body
        let itineraryDb
        let error = null
        try{
            itineraryDb = await Itinerary.findOneAndUpdate({_id : id}, itinerary, {new: true})
        } catch(err){
            error= err
        }
        res.json({
            response: error ? 'ERROR' : itineraryDb,
            success: error ? false : true,
            error : error
        })
    },

    removeItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null
        try{
            itinerary = await Itinerary.findOneAndDelete({_id : id })
        } catch(err){
            error = err
        }
        res.json({
            response: error? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    

}

module.exports = itinerariesControllers