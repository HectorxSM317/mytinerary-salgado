import React from 'react'
import SignUp from '../components/SignUp'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import countriesAction from '../redux/actions/countriesAction'

export default function PageSingUp() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);
  

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(countriesAction.getCountries())

    },[])

    const countries = useSelector(store => store.countriesReducer.countries)
    const countryFilter = countries.filter(country => country.name.length < 20)
  

  return (
    <div className='flex-grow flex justify-center bgSignUp'>
        <SignUp countries={countryFilter}/>
    </div>
  )
}
