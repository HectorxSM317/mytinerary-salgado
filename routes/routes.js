const Router = require('express').Router();
console.log(Router)

const citiesControllers = require('../controllers/citiesControllers'); //importar controladores
const {getCities, getOneCity, addCity, modifyCity, removeCity } = citiesControllers//desestructura citiescontrolers


Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

module.exports = Router


