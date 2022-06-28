const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const userControllers = {

    signUpUser: async (req,res) => {
        // console.log('REQ BODY SIG UP USER')
        // console.log(req.body.userData)
        const {firstName, lastName, password, email, photoUser, country, from} = req.body.userData
       
        try {
            const newUser = await User.findOne({email}) //buscamos por mail
            if (!newUser) { //si NO existe el usuario
                const hashWord = bcryptjs.hashSync(password, 10) //hasheo la contraseña
                // console.log(hashWord)
                const myNewUser = await new User({firstName, lastName, photoUser, email, country,
                    password: [hashWord],
                    from: [from]})
                if (from === "signUpForm") { //si la data viene del formulario
                    //ACLARACION: ahora el if/else tienen la misma data
                    //pero van a cambiar cuando enviemos correo de verificacion
                    await myNewUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `check ${email} and finish your SIGN UP!`}) 
                }else { //si la data viene de una red social
                    await myNewUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `you SIGNED UP by ${from}! now LOG IN!`})
                }
            } else { //si existe el usuario, significa que al menos tiene un registro
                //hay que chequear si coincide la forma de RE-REGISTRO con la ya REGISTRADA
                //si coincide se tiene que cumplir la siquiente condicion:
                if (newUser.from.indexOf(from) !== -1) { //coincide la forma de registro ACTUAL con alguna ya EXISTENTE en mi bd
                    res.json({ //devolvemos la respuesta
                        success: false,
                        from: from,
                        message: `${email} has been registered, please LOG IN!`})
                //si no coincide, se tiene que cumplir esta otra:                
                } else {
                    //si es -1 significa que el usuario NO SE REGISTRO DE ESTA FORMA (nuevo registro con google)
                    //pero ya tiene AL MENOS UN registro (facebook y form)
                    const hashWord = bcryptjs.hashSync(password, 10)
                    newUser.password.push(hashWord)
                    newUser.from.push(from)
                    await newUser.save()
                    res.json({
                        success: true, 
                        from: from, 
                        message: `check ${email} to confirm your SIGN UP!`}) 
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    },

    signInUser: async (req, res) => {
        console.log('REQ BODYloged')
        console.log(req.body.logedUser)
        const {email, password, from} = req.body.logedUser
        try {
            const loginUser = await User.findOne({email}) //buscamos por email
            console.log(loginUser)
            if (!loginUser) { //si NO existe el usuario
                res.json({
                    success: false,
                    from: 'no from',
                    message: `${email} has no account, please SIGN UP!`})
            } else { //si existe el usuario
                let checkedWord = loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                console.log(password)
                console.log(checkedWord)
                //filtramos en el array de contraseñas hasheadas si coincide la contraseña 
                if (from === "signUpForm") { //si fue registrado por nuestro formulario
                    if (checkedWord.length > 0) { //si hay coincidencias
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id: loginUser._id,
                            email: loginUser.email,
                            firstName: loginUser.firstName,
                            photoUser: loginUser.photoUser,
                            from: loginUser.from}
                        await loginUser.save()
                        res.json({
                            response: userData, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${userData.firstName}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your password!`})
                    }
                } else { //si fue registrado por redes sociales
                    //ACLARACION: por ahora es igual al anterior
                    if (checkedWord.length>0) { //si hay coincidencias
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id: loginUser._id,
                            email: loginUser.email,
                            firstName: loginUser.firstName,
                            photoUser: loginUser.photoUser,
                            from: loginUser.from}
                        await loginUser.save()
                        res.json({
                            response: userData, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${userData.firstName}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your mail or password!`})
                    }
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    }
}

module.exports = userControllers;