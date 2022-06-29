const Router = require('express').Router(); 
const validatorSignUp = require('../config/validatorSignUp')

const {getCities, getOneCity, addCity, modifyCity, removeCity } = require('../controllers/citiesControllers');
const {getItinerary, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, getItineratyForCity} = require('../controllers/itineraryControllers');
const { signUpUser, signInUser } = require('../controllers/userControlllers')


// ---Cities---
Router.route('/cities') 
.get(getCities) 
.post(addCity) 

Router.route('/cities/:id')
.delete(removeCity) 
.put(modifyCity) 
.get(getOneCity)  

// ----Itineraries----
Router.route('/itineraries')
.get(getItinerary)
.post(addItinerary)

Router.route('/itineraries/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route('/cities/:id/itineraries')
.get(getItineratyForCity)

// -----Users----
Router.route('/register')
.post(validatorSignUp, signUpUser)

Router.route('/login')
.post(signInUser)








module.exports = Router


