import axios from 'axios'

const apiUrl = 'http://country.io/names.json'

const countriesAction = {

    getCountries: () => {
        return async (dispatch, getState) => {
            const res = await axios('https://countriesnow.space/api/v0.1/countries/iso'
            )
            dispatch({type: 'GETCOUNTRIES', payload: res.data.data})
        }
    },
}

export default countriesAction