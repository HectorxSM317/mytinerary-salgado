const City = require('../models/cities') //Importamos el modelo, el modelo tiene como deficicion la coleccion cities

const citiesControllers = {
    // --Con este metodo obtenemos todos los datos cargados en nuestra coleccion cities
    getCities: async (req, res) => {
        let cities //Que variable que usaremos en try para guardar los datos
        let error = null //Variable error que siempre inicia en null
        try { //Se intenta hacer una peticion
            cities = await City.find() //Find acciona como filtro, este sin parametro devuelve todos los datos de la coleccion vinculada al modelo declarado
        } catch (err) { //Si no se logra el try, se atrapa el error en la variable error creada anteriormente
            error = err
        }
        res.json({ // la respuesta la pasamos aun archivo Json
            response: error ? 'ERROR' : {
                cities
            }, //condicional ternario en caso de error o respuesta
            success: error ? false : true,
            error: error
        })
    },

    getOneCity: async (req, res) => { //req: entra los datos que se necesita para generar las acciones y res: la respuesta de este en formato Json
        const id = req.params.id
        let city;
        let error = null
        try {
            city = await City.findOne({
                _id: id
            })
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    },


    // Con este controlador podemos crear objetos acorde al modelo y agregarlo a la coleccion
    addCity: async (req, res) => {
        const {
            name,
            country,
            description,
            caruselImg,
            detailImg1,
            detailImg2,
            detailImg3
        } = req.body //Requerimos informacion del body tecleada por el usuario que está dentro de data
        console.log(req.body)
        let city;
        let error = null;
        try {
            city = await new City({ //Si no existe en la colección, esta crea uya nueva instancia de Cities
                name: name, //Se setean nueva informacion para las variables
                country: country,
                description: description,
                caruselImg: caruselImg,
                detailImg1: detailImg1,
                detailImg2: detailImg2,
                detailImg3: detailImg3,
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    },


    multiplesCities: async (req, res) => {
        let city = []
        const data = req.body //almaceno en la constante data la informacion que le pedi al body, multi: data no se desestructura pq aqui es un array

        let error = null
        try {
            data.map(async (item) => {
                await new City({
                    name: item.name,
                    country: item.country,
                    description: item.description,
                    caruselImg: item.caruselImg,
                    detailImg1: item.detailImg1,
                    detailImg2: item.detailImg2,
                    detailImg3: item.detailImg3,
                }).save()
            })
        } catch (err) {
            error = err
        }
        city = await City.find()
        res.json({
            response: error ? "ERROR" : city,
            success: error ? false : true,
            error: error
        })
    },

    modifyCity: async (req, res) => {
        const id = req.params.id //Ciudad que queremos modificar
        const city = req.body //datos necesarios para la modificacion
        let citydb
        let error = null
        try {
            citydb = await City.findOneAndUpdate({
                _id: id
            }, city, {
                new: true
            }) //buscamos dentro del modelo (_id:id), le pasamos los datos que están en city, y creamos la instancia modificada
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : citydb,
            success: error ? false : true,
            error: error
        })
    },



    removeCity: async (req, res) => {
        const id = req.params.id
        let city
        let error = null
        try {
            city = await City.findOneAndDelete({_id: id}) //Busca dentro del modelo por id y alimina
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    }

}

module.exports = citiesControllers;