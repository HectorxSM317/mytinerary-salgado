import axios from 'axios'



let apiUrl = 'http://localhost:4000/api'

const itineraryAction = {

    getItineratyForCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(apiUrl+`/cities/${id}/itineraries`)
            dispatch({type: 'GETTINFROMCITY', payload: res.data.response})
            
            return res
            
        }
        
    },

    getOneItinerary: (id) => {

        return async (dispatch, getState) => {
            const res = await axios.get(apiUrl+`/itineraries/${id}`)
        
           return res
        }
    },

    likeDislike: (id) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
                const res = await axios.put(apiUrl+`/itinerary/like/${id}`, null, {headers: {
                        'Authorization': 'Bearer ' + token}
            })
            
            return res
                
                
            }catch (error){
                
                console.log(error)
            }
        }
    }
}

export default itineraryAction