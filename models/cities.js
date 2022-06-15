const mongoose = require('mongoose') //paquete de mongoose lo requerimos

const citySchema = new mongoose.Schema({ //generamos un nuevo esquema de mongoose como objeto que tiene las propiedades de city
    name: {type:String, required:true}, //Se asigna un tipo especifico y todos son requeridos
    country: {type:String, required:true},
    description: {type:String, required:true},
    caruselImg: {type:String, required:true},
    detailImg1: {type:String, required:true},
    detailImg2: {type:String, required:true},
    detailImg3: {type:String, required:true}, 
})

const City = mongoose.model('cities', citySchema) //Cities llama a un modelo y se conecta a cities (coleccion Mongoose) de config atravez de cluster (.env) (CitiesSchema es lo de arriba)
module.exports = City //se exporta al controlador