const mongoose = require('mongoose')
const environments = require('./environments')

mongoose.connect(environments.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }) 
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err))