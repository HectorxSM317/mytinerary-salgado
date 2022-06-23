import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerariReducer from './itineraryReducer'

const mainReducer = combineReducers({
    citiesReducer,
    itinerariReducer
})

export default mainReducer //Se exporta al index.js