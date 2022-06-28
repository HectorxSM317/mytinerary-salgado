import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import countriesReducer from "./countriesReducer";

const mainReducer = combineReducers({
    citiesReducer,
    itineraryReducer,
    countriesReducer
})

export default mainReducer //Se exporta al index.js