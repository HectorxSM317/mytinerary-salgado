const initialState = {
    activities: [],
    
}


const citiesReducer = (state = initialState, action) => {

    switch (action.type) { //condiciones
        
        case 'GETONEACTIVITY':
            return {
                ...state,
                activities: action.payload
            }
        
                return state


    }


}

export default citiesReducer //se importa en mainReducer