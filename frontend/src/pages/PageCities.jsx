import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import HeroCity from "../components/HeroCity";
import Response from "../components/Response";
import { useSelector, useDispatch } from "react-redux";
import citiesActions from '../redux/actions/citiesActions'


export default function PageCities() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  const dispatch = useDispatch() //Permite traer las acciones
  const [searchInput, setSearchinput] = useState("");

  
  useEffect(() => {
    dispatch(citiesActions.filterCities(searchInput))
    // eslint-disable-next-line
  },[searchInput])
  
  const citiesFilter = useSelector ( store => store.citiesReducer.filterCity)
  
  
  return (
    <div className="flex flex-col pt-10 items-center bg-contain bg-[url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80')] ">
      <HeroCity />
      <div className="flex flex-col items-center mt-5 w-11/12 ">
        <div data-aos="flip-left" data-aos-duration="2000" className="z-10 mt-8">
          <input
            type="text"
            name="name"
            placeholder="Search cities"
            onKeyUp= {key => setSearchinput(key.target.value)}
            className="border-8 py-2 text-center rounded-xl px-6"
          />
        </div>
        <div className="pageCities bg-zinc-500 flex justify-center w-full border-8 py-8 -translate-y-12 rounded-3xl flex-wrap items-center my-5 bg-cover bg-[url('https://images.unsplash.com/photo-1638438134319-68477408c19b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80')]">
          {citiesFilter.length > 0 ? (
            citiesFilter?.map((city) => <Card city={city} key={city._id} />)
          ) : (
            <Response />
          )}
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     cities: state.citiesReducer.cities,
//     auxiliar: state.citiesReducer.cities
//   }
// }

// export default connect(mapStateToProps, null)(PageCities);


