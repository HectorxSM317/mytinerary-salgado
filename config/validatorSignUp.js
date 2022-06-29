const joi = require('joi')

const validatorSignUp = (req, res, next) => {
    // console.log(req)
    const schema = joi.object({
        firstName: joi.string()
        .min(4)
        .required()
        .messages({'string.min': '"firstName": min 4 characters'}),
        lastName: joi.string()
        .min(4)
        .required()
        .messages({'string.min': '"lastName": min 3 characters'}),
        email: joi.string()
            .email({minDomainSegments: 2})
            .required()
            .messages({'string.email': '"email":incorrect format'}),
        password: joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min': '"password": min 8 characters',
                'string.max': '"password": max 30 characters'
            }),
        photoUser: joi.string()
            .required(),
        country: joi.string()
            .required(),
        from: joi.string()
            .required()
        
    })
    const validation = schema.validate(req.body.dataUser, {abortEarly:false})
    // console.log(validation.error)
    if(validation.error){
        return res.json({success: false, from: 'validator', message: validation.error.details, test:validation})
    }
    next()
}

module.exports = validatorSignUp