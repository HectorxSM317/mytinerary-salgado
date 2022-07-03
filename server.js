require('dotenv').config() 
require('./config/database')
const cors = require('cors')
const express = require('express') 
const app = express()
const PORT = 4000
const passport = require('passport')
const Router = require('./routes/routes') 


//Middlewares
app.use(cors()) 
app.use(express.json()) 
app.use(passport.initialize())
app.use('/api', Router) 


app.listen(PORT, () =>{
    console.log('Server ready on port ' + PORT)
})