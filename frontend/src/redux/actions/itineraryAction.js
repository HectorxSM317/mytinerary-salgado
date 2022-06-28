import axios from 'axios'



let apiUrl = 'http://localhost:4000/'

const itineraryAction = {

    getTinFromCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`api/cities/${id}/itineraries`)
            dispatch({type: 'GETTINFROMCITY', payload: res.data.response})
        }
    }
}

export default itineraryAction