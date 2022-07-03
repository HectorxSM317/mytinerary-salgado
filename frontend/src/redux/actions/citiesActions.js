import axios from 'axios'
import { GETCITIES } from '../reducers/citiesReducer'


let apiUrl = 'http://localhost:4000/'

const citiesActions = {


    getCities: () => {
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`api/cities`)
            // console.log(res)
            dispatch({type: GETCITIES, payload: res.data.response.cities})
        }
    },

    getOneCity: (id) => {
        return async (dispatch, getState) =>{
            const res = await axios(apiUrl+`api/cities/${id}`)
            dispatch({type: 'GETONECITY', payload: res.data.response})
        }
    },

    filterCities: (searchInput) => {
        return (dispatch, getState) => {
            dispatch({type:'FILTERCITIES', payload:searchInput})
        }
    }


}
export default citiesActions