import axios from 'axios'


let apiUrl = 'http://localhost:4000/'

const usersAction = {

    signUpUser: (userData) => {
        
        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl+'api/register', {userData})
            console.log(res)
            dispatch({
                type: "MESSAGE",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success,
                },
            });
            return res
            
        }
    },

    signInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl+'api/login', {logedUser})
            console.log(res)
            dispatch({
                type: "USER",
                payload: res.data.response,
            });
            return res
        }
    },
    
    logoutUser: () => {
        return async (dispatch, getState) => {
            dispatch({
                type: "USER",
                payload: null
            });
        }
    },

    

}

export default usersAction