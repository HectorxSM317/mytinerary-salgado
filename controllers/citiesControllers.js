const City = require('../models/cities') 

const citiesControllers = {
    
    getCities: async (req, res) => {
        let cities 
        let error = null
        try {
            cities = await City.find()
        } catch (err) { 
            error = err
        }
        res.json({ 
            response: error ? 'ERROR' : {cities},
            success: error ? false : true,
            error: error
        })
    },

    getOneCity: async (req, res) => { 
        const id = req.params.id
        let city;
        let error = null
        try {
            city = await City.findOne({_id: id})
        } catch (err) {
            // city ? error = err : error = 'not found'
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    },


    
    addCity: async (req, res) => {
        const {name, country, description, caruselImg, detailImg1, detailImg2, detailImg3} = req.body 
        console.log(req.body)
        let city;
        let error = null;
        try {
            city = await new City({ 
                name: name, 
                country: country,
                description: description,
                caruselImg: caruselImg,
                detailImg1: detailImg1,
                detailImg2: detailImg2,
                detailImg3: detailImg3,
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    },

    modifyCity: async (req, res) => {
        const id = req.params.id 
        const city = req.body 
        let cityDb
        let error = null
        try {
            cityDb = await City.findOneAndUpdate({_id: id}, city, {new: true}) 
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : cityDb,
            success: error ? false : true,
            error: error
        })
    },



    removeCity: async (req, res) => {
        const id = req.params.id
        let city
        let error = null
        try {
            city = await City.findOneAndDelete({_id: id}) 
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    }

}

module.exports = citiesControllers;