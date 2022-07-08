const Itinerary = require('../models/itinerary')

const itinerariesControllers = {

    getItinerary : async (req, res) =>{
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find()
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
            itinerary = await Itinerary.findOne({_id: id}).populate('comments.userID', {firstName: 1, lastName:1, photoUser: 1})
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
        const {itineraryName, userName, userPhoto, price, time, tags, likes, city} = req.body
        let itinerary
        let error = null
        try{
            itinerary = await new Itinerary({
                itineraryName:  itineraryName,
                userName:userName,
                userPhoto:userPhoto,
                price:price,
                time:time,
                tags:tags,
                likes:likes,
                city: city
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

    getItineratyForCity: async (req,res)=>{
        const id = req.params.id

        let itineraryForCity
        let error

        try{
            itineraryForCity = await Itinerary.find({city:id})
            
        }catch(err){
            error = err
        }
        res.json({
            response: error? 'ERROR' : itineraryForCity,
            success: error ? false : true,
            error: error
        })

    },

    likeDislike: async (req, res) => {
        const id = req.params.id //ID del itinerario que queremos agregar o quitar el like, llega por parametro de axios
        const user = req.user.id //respuesta de passport

        const itinerary = await Itinerary.findOne({_id: id})
        try{
            if(itinerary.likes.includes(user)){
                Itinerary.findOneAndUpdate({_id : id}, {$pull:{likes:user}}, {new:true})
                .then(newItinerary => res.json({success:true, message: false, response: newItinerary.likes}))
                .catch((error) => console.log(error))
            }else{
                Itinerary.findOneAndUpdate({_id : id}, {$push:{likes:user}}, {new:true})
                .then(newItinerary => res.json({success:true, message: true, response: newItinerary.likes}))
                .catch((error) => console.log(error))
            }
        }catch{(error) => res.json({success: false, response: error})}
        

    }

}

module.exports = itinerariesControllers