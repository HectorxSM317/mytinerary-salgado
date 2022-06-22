const initialState = {
    cities: [],
    oneCity: {}
}
export const GETCITIES = 'GETCITIES'

const citiesReducer = (state = initialState, action) => {

    switch (action.type) { //condiciones
        case GETCITIES:
            return {
                ...state,
                cities: action.payload,
            }
        case 'GET_ONE_CITY':
            return {
                ...state,
                oneCity: action.payload
            }
            default:
                return state


    }


}

export default citiesReducer //se importa en mainReducer