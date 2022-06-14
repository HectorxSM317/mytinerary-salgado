const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,//Cluster de conexion MONGO_URI nombre de variable
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }) 
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err))