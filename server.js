require('dotenv').config() //Llamamos al archivo .env y se carga en la variable process.env (variable local ejecutada por nodejs)
require('./config/database') //Llamamos a la configuracion de la database

const cors = require('cors')
const express = require('express') //importamos express de los node_modules, express es una infraestructura de aplicaciones con caracteristicas para apps y crea apis
const Router = require('./routes/routes')
const app = express()//nuestra app va a utilizar los metodos express y se va a definir como un servidor

const PORT = 4000
//Middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)

//le pasamos a la app el metodo listen para que escuche
app.listen(PORT, () =>{
    console.log('Servidor corriendo en puerto ' + PORT)
})