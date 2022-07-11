import axios from 'axios'



let apiUrl = 'https://mytinerary-salgado.herokuapp.com/api'

const activitiesActions = {

    getActivitiesFromItinerary: (id) => {
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`/itineraries/${id}/activities`)
            return res.data.response
            
            
            
        }
    }

    

}
export default activitiesActions