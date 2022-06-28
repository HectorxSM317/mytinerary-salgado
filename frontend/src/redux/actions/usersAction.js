import axios from 'axios'


let apiUrl = 'http://localhost:4000/'

const usersAction = {

    singUpUser: (userData) => {
        
        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl+'api/register', {userData})
            // console.log(res)

        }
    },

    signInUser: (logedUser) => {
        // console.log(logedUser)
        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl+'api/login', {logedUser})
            console.log(res)
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'USER',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        }
    }

}

export default usersAction