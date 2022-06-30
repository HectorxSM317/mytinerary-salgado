const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const sendVerification = require('./sendVerification')

const userControllers = {

    signUpUser: async (req, res) => {
        // console.log('REQ BODY SIG UP USER')
        // console.log(req.body.userData)
        const {
            firstName,
            lastName,
            password,
            email,
            photoUser,
            country,
            from
        } = req.body.userData

        try {
            const newUser = await User.findOne({email}) //buscamos por mail
            const hashWord = bcryptjs.hashSync(password, 10) //hasheo la contraseña
            const verification = false //por default
            const uniqueString = crypto.randomBytes(15).toString('hex') //metodos de crypto
            if (!newUser) { //si NO existe el usuario
                const myNewUser = await new User({firstName, lastName, photoUser, email, country, verification,
                    uniqueString: uniqueString,
                    password: [hashWord],
                    from: [from]
                })
                if (from === "signUpForm") { 
                    await myNewUser.save()
                    await sendVerification(email, uniqueString)
                    res.json({
                        success: true,
                        from: from,
                        message: `check ${email} and finish your SIGN UP!`
                    })
                } else { //si la data viene de una red social
                    newUser.verification = true
                    await myNewUser.save()
                    res.json({
                        success: true,
                        from: from,
                        message: `you SIGNED UP by ${from}! now LOG IN!`
                    })
                }
            } else { //si existe el usuario, significa que al menos tiene un registro
                //hay que chequear si coincide la forma de RE-REGISTRO con la ya REGISTRADA
                //si coincide se tiene que cumplir la siquiente condicion:
                if (newUser.from.indexOf(from) !== -1) { //coincide la forma de registro ACTUAL con alguna ya EXISTENTE en mi bd
                    res.json({ //devolvemos la respuesta
                        success: false,
                        from: from,
                        message: `${email} has been registered, please LOG IN!`
                    })
                    //si no coincide, se tiene que cumplir esta otra:                
                } else {
                    //si es -1 significa que el usuario NO SE REGISTRO DE ESTA FORMA (nuevo registro con google)
                    //pero ya tiene AL MENOS UN registro (facebook y form)
                    const hashWord = bcryptjs.hashSync(password, 10)
                    newUser.password.push(hashWord)
                    newUser.from.push(from)
                    newUser.verification = true
                    await newUser.save()
                    res.json({
                        success: true,
                        from: from,
                        message: `check ${email} to confirm your SIGN UP!`
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'
            })
        }
    },

    signInUser: async (req, res) => {
        // console.log('REQ BODYloged')
        // console.log(req.body.logedUser)
        const {
            email,
            password,
            from
        } = req.body.logedUser
        try {
            const loginUser = await User.findOne({
                email
            }) //buscamos por email
            // console.log(loginUser)
            if (!loginUser) { //si NO existe el usuario
                res.json({
                    success: false,
                    from: 'no from',
                    message: `${email} has no account, please SIGN UP!`
                })
            } else { //si existe el usuario
                let checkedWord = loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                if (checkedWord.length === 0) {
                    res.json({
                        success: false,
                        from: from,
                        message: `verify your mail or password!`
                    })
                    return
                }
                if (from === "signUpForm") { //si fue registrado por nuestro formulario
                    if(loginUser.verification){
                        console.log(loginUser.verification)
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id: loginUser._id,
                            email: loginUser.email,
                            firstName: loginUser.firstName,
                            photoUser: loginUser.photoUser,
                            from: loginUser.from
                        }
                        await loginUser.save()
                        res.json({
                            response: userData,
                            success: true,
                            from: from,
                            message: `Welcome ${userData.firstName}!`
                        })
                    }else{
                        res.json({
                            success: false,
                            from: from,
                            message: `Please validate your email`
                        })
                    }

                } else { //si fue registrado por redes sociales
                    //ACLARACION: por ahora es igual al anterior
                    //si hay coincidencias
                    const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                        id: loginUser._id,
                        email: loginUser.email,
                        firstName: loginUser.firstName,
                        photoUser: loginUser.photoUser,
                        from: loginUser.from
                    }
                    await loginUser.save()
                    res.json({
                        response: userData,
                        success: true,
                        from: from,
                        message: `Welcome ${userData.firstName}!`
                    })

                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'
            })
        }
    },

    verifyEmail: async(req, res) => {
        const {string} = req.params
        const user = await User.findOne({uniqueString: string})
        if(user){
            user.verification = true
            await user.save()
            res.redirect('http://localhost:3000/')
        }else{res.json({
            success: false,
            message: 'email has not been confirmed yet'})
        }
    }

}

module.exports = userControllers;