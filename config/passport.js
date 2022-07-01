const passport = require('passport')
const User = require('../models/user')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const user = require('../models/user')


module.exports = passport.use(new jwtStrategy(
    {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'mykey'
},
    (jwt_payload, done) => {
    User.findOne({_id : jwt_payload.id})
    .then(user => {
        console.log(user)
        if(user){
            return done(null, user)
        }else if(err){
            console.log(err)
            return done(err, false)
        }else{
            return done(null, false)
        }


    })
    .catch(err => {
        console.log(err.status)
        return done(err, false)
    })




}))