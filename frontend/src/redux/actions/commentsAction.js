import axios from 'axios'

let apiUrl = 'http://localhost:4000/api'

const commentsAction = {

    addComment: (comment) => {
        
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')

            if (comment.comment !== "") {
                const res = await axios.post(apiUrl+`/itinerary/comment`, { comment }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                console.log(res)
                return res
            }
            else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: "ingresa un comentario para guardarlo",
                        success: false
                    }
                })
            }
        }

    },
    modifyComment: (comment) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(apiUrl+`/itinerary/comment`, { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },
    deleteComment: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl+`/itinerary/comment/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
}

export default commentsAction