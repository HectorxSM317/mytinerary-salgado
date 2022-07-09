const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName: {type: String, required:true},
    lastName: {type: String},
    password: {type: Array, required:true},
    email: {type: String, required:true},
    photoUser: {type: String, required:true},
    country: {type: String, required:true},
    from: {type: Array, required:true},
    uniqueString: {type: String, required:true},
    verification: {type: Boolean, required:true}

})

const User = mongoose.model('users', userSchema)
module.exports = User