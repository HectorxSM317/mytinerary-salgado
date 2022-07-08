import axios from 'axios'


let apiUrl = 'http://localhost:4000/'

const usersAction = {

    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl + 'api/signup', {
                userData
            })
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
            const res = await axios.post(apiUrl + 'api/login', {logedUser})
           
            if (res.data.success) {
                localStorage.setItem('token', res.data.response.token)

            }
            dispatch({
                type: "USER",
                payload: res.data.response.userData
            });
            return res
        }
    },

    logoutUser: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({
                type: "USER",
                payload: null
            });
        }
    },

    checkToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get(apiUrl + 'api/singInToken', {headers: {'Authorization': 'Bearer ' + token}
                })

                .then(user => {
                  
                    if (user.data.success) {
                        dispatch({
                            type: 'USER',
                            payload: user.data.response
                        })
                        dispatch({
                            type: 'MESSAGE',
                            payload: {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        })
                        
                        // localStorage.setItem('token', user.data.response.token)
                    } else {
                        localStorage.removeItem('token')
                    }
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        dispatch({
                            type: 'MESSAGE',
                            payload: {
                                view: true,
                                message: 'Try again please',
                                success: false
                            }})
                    localStorage.removeItem('token')
                    }

                })
        }
    },

    modifyUser : (userData) => {
      
        return async (dispatch, getState) => {
            const id = getState().userReducer.user.id
          
            const res = await axios.put(apiUrl+ 'api/user/'+id, {userData}) 
       
            
        }



    }
}

export default usersAction