const initialState = {
    user: null,
    snackbar: {
        view: false,
        message: '',
        success:false
    }
}

const userReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload,
            }
        case 'MESSAGE':
            return {
                ...state,
                snackbar: action.payload,
            }
        default:
            return state
    }
}
export default userReducer