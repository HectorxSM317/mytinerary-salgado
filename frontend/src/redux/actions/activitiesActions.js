import axios from 'axios'



let apiUrl = 'http://localhost:4000/api'

const activitiesActions = {

    getActivitiesFromItinerary: (id) => {
        // console.log(id)
        return async (dispatch, getState) => {
            const res = await axios(apiUrl+`/itineraries/${id}/activities`)
            // console.log(res.data.response)
            return res.data.response
            
            
            
        }
    }

    

}
export default activitiesActions