const Router = require('express').Router(); 
const validatorSignUp = require('../config/validatorSignUp')
const passport = require('../config/passport')
const {getCities, getOneCity, addCity, modifyCity, removeCity } = require('../controllers/citiesControllers');
const {getItinerary, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, getItineratyForCity, likeDislike} = require('../controllers/itineraryControllers');
const { signUpUser, signInUser, verifyEmail, checkToken, modifyUser  } = require('../controllers/userControlllers')
const {getActivities, getOneActivity, addActivity, modifyActivity, removeActivity, getActivityForItinerary} = require('../controllers/activitiesControllers');
const {addComment, modifyComment, deleteComment} = require('../controllers/commentsControllers')


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
Router.route('/signup')
.post(validatorSignUp, signUpUser)

Router.route('/login')
.post(signInUser)

Router.route('/verify/:string')
.get(verifyEmail)

Router.route('/singInToken')
.get(passport.authenticate('jwt', {session: false}), checkToken)

Router.route('/user/:id')
.put(modifyUser) 

Router.route('/activities')
.get(getActivities)
.post(addActivity)

Router.route('/activities/:id')
.delete(removeActivity)
.put(modifyActivity)
.get(getOneActivity)

Router.route('/itineraries/:id/activities')
.get(getActivityForItinerary)

Router.route('/itinerary/like/:id')
.put(passport.authenticate('jwt', {session: false}), likeDislike)



Router.route('/itinerary/comment')
.post(passport.authenticate('jwt', {session: false}), addComment)
.put(passport.authenticate('jwt', {session: false}), modifyComment)

Router.route('/itinerary/comment/:id')

.post(passport.authenticate('jwt', {session: false}), deleteComment)


module.exports = Router


