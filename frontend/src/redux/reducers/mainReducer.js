import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import countriesReducer from "./countriesReducer";
import userReducer from "./userReducer";

const mainReducer = combineReducers({
    citiesReducer,
    itineraryReducer,
    countriesReducer,
    userReducer
})

export default mainReducer //Se exporta al index.js