import axios from 'axios'

let apiUrl = 'http://localhost:4000/api'

const commentsAction = {

    addComment: (comment) => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            const res = await axios.post(apiUrl+'/addcomment', {comment}, {headers: {
                'Authorization': 'Bearer ' + token}})
            console.log(res)
        }
    }
}

export default commentsAction