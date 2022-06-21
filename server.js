const cors = require('cors')
const express = require('express') 
const Router = require('./routes/routes') 
const app = express()
const PORT = 4000

require('dotenv').config() 
require('./config/database')

//Middlewares
app.use(cors()) 
app.use(express.json()) 
app.use('/api', Router) 


app.listen(PORT, () =>{
    console.log('Server ready on port ' + PORT)
})