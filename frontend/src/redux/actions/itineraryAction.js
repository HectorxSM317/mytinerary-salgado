import axios from 'axios'



let apiUrl = 'http://localhost:4000/api'

const itineraryAction = {

    getItineraryFromCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(apiUrl+`/cities/${id}/itineraries`)
            dispatch({type: 'GETTINFROMCITY', payload: res.data.response})
            console.log(res)
            return res
            
        }
        
    },

    likeDislike: (id) => {
        // console.log(id)
        const token = localStorage.getItem('token')
        // console.log(token)
        return async (dispatch, getState) => {
            try{
                const res = await axios.put(apiUrl+`/itinerary/like/${id}`, null, {headers: {
                        'Authorization': 'Bearer ' + token}
            })
            console.log(res)
            return res
                
                
            }catch (error){
                console.log(error)
            }
        }
    }
}

export default itineraryAction