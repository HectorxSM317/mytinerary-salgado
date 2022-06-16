const Router = require('express').Router(); //Requiero el metodo Router de la libreria express

const {getCities, getOneCity, addCity, modifyCity, removeCity } = require('../controllers/citiesControllers'); //Requiero los controladores y lo destructuro

Router.route('/cities') //a Router le configuro una ruta
.get(getCities) //read //a la ruta en cuestion le aplico el metodo get para asignarle el controlador getCities
.post(addCity) //create

Router.route('/cities/:id')
.delete(removeCity) //delete
.put(modifyCity) //update
.get(getOneCity) //Read

module.exports = Router

//las rutas se requieren en el server
