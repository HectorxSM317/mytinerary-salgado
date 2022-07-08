const initialState = {
    cities: [],
    oneCity: {},
    filterCity:[]
}
export const GETCITIES = 'GETCITIES'

const citiesReducer = (state = initialState, action) => {

    switch (action.type) { //condiciones
        case GETCITIES:
            return {
                ...state,
                cities: action.payload,
                filterCity: action.payload
            }
        case 'GETONECITY':
            return {
                ...state,
                oneCity: action.payload
            }
        case 'FILTERCITIES':
            let filter = state.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
           
            return {
                ...state,
                filterCity: filter
            }
            default:
                return state


    }


}

export default citiesReducer //se importa en mainReducer