const cors = require('cors') //requiero el modulo cors
const express = require('express') //requiero el modulo express, express es una infraestructura de aplicaciones con caracteristicas para apps y crea apis
const Router = require('./routes/routes') //requiero el modulo de las rutas de conexion
const app = express()//nuestra app va a utilizar los metodos express y se va a definir como un servidor
const PORT = 4000

require('dotenv').config() //Llamamos al archivo .env y se carga en la variable process.env (variable local ejecutada por nodejs)
require('./config/database') //Llamamos a la configuracion de la database

//Middlewares
app.use(cors()) //la app/server usa el metodo cors, para obtener permisos de acceso a la base de datos
app.use(express.json()) // la app/server usa un metodo de express que convierte todo a JSON (json es un metodo de express)
app.use('/api', Router) //la app/server usa las rutas y como intermediario añade a cada endpoint => /api

//listen escucha el puerto y lo levanta
app.listen(PORT, () =>{
    console.log('Server ready on port' + PORT)
})