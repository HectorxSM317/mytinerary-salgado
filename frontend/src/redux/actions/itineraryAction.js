import axios from 'axios'



let apiUrl = 'http://localhost:4000/'

const itineraryAction = {

    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`api/itineraries`)
            console.log(res)
            dispatch({type: GETITINERARIES, payload: res.data.response.itineraries})
        }
    },
    getOneItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`api/itineraries/${id}`)
            console.log(res)
            dispatch({type: GETONEITINERARIES, payload: res.data.response.itineraries})
        }
    },
    
}