import axios from 'axios'



let apiUrl = 'http://localhost:4000/api'

const activitiesActions = {

    getActivitiesFromItinerary: (id) => {
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`/itineraries/${id}/activities`)
            return res.data.response
            
            
            
        }
    }

    

}
export default activitiesActions