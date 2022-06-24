const Router = require('express').Router(); 

const {getCities, getOneCity, addCity, modifyCity, removeCity } = require('../controllers/citiesControllers');
const {getItinerary, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, getItineratyForCity} = require('../controllers/itineraryControllers');

Router.route('/cities') 
.get(getCities) 
.post(addCity) 

Router.route('/cities/:id')
.delete(removeCity) 
.put(modifyCity) 
.get(getOneCity)  

Router.route('/itineraries')
.get(getItinerary)
.post(addItinerary)

Router.route('/itineraries/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route('/cities/:id/itineraries')
.get(getItineratyForCity)





module.exports = Router


