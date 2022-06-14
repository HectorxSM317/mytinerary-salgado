require('dotenv').config() //Llamamos al archivo .env y se carga en la variable process.env (variable local ejecutada por nodejs)
require('./config/database') //Llamamos a la configuracion de la database

const express = require('express') //importamos express de los node_modules, express es una infraestructura de aplicaciones con caracteristicas para apps y crea apis
const app = express()//nuestra app va a utilizar los metodos express y se va a definir como un servidor

const PORT = 4000

app.set('port', PORT)

app.get('/', (req, res) =>{
    res.send('Server created Hola que tal!')
})

//le pasamos a la app el metodo listen para que escuche
app.listen(PORT, () =>{
    console.log('Servidor corriendo en puerto ' + PORT)
})