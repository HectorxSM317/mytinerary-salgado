const Activity = require('../models/activities') 

const activitiesControllers = {
    
    getActivities: async (req, res) => {
        let activities 
        let error = null
        try {
            activities = await Activity.find()
        } catch (err) { 
            error = err
        }
        res.json({ 
            response: error ? 'ERROR' : {activities},
            success: error ? false : true,
            error: error
        })
    },

    getOneActivity: async (req, res) => { 
        const id = req.params.id
        let activities;
        let error = null
        try {
            activities = await Activity.findOne({_id: id})
        } catch (err) {
            // Activity ? error = err : error = 'not found'
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },


    
    addActivity: async (req, res) => {
        const {name, image, itinerary} = req.body 
        
        let activities;
        let error = null;
        try {
            activities = await new Activity({ 
                name: name, 
                image: image,
                itinerary: itinerary
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },

    modifyActivity: async (req, res) => {
        const id = req.params.id 
        const activities = req.body 
        let activitiesDb
        let error = null
        try {
            activitiesDb = await Activity.findOneAndUpdate({_id: id}, activities, {new: true}) 
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },



    removeActivity: async (req, res) => {
        const id = req.params.id
        
        let activities
        let error = null
        try {
            activities = await Activity.findOneAndDelete({_id: id}) 
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },

    getActivityForItinerary: async (req, res)=>{
        
        const id = req.params.id
       
        let activityForItinerary;
        let error;

        try{
            activityForItinerary = await Activity.find({itinerary:id})
            
        }catch(err){
            error = err
        }
       
        res.json({
            response: error? 'ERROR' : activityForItinerary,
            success: error ? false : true,
            error: error
        })

    }

}

module.exports = activitiesControllers;