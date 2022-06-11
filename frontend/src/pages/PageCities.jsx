import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Response from "../components/Response";
import { cities } from "../data";

export default function PageCities() {
  const [arrayFilter, setArrayFilter] = useState([]);
  const [searchInput, setSearchinput] = useState("");

  useEffect(() => {
    setArrayFilter(cities);
    const arrayCity = cities.filter(city => city.name.toLowerCase().startsWith(searchInput.toLowerCase().trim()));

    setArrayFilter(arrayCity);
    // console.log(arrayFilter);
  }, [searchInput]);

  // const filterKey = (key) => {
  //   // console.log(key.target.value)
  //   setSearchinput(key.target.value);
  // };
  // console.log(searchInput)

  return (
    <div className="flex flex-col items-center my-3">
      <input
        type="text"
        name="name"
        placeholder="Cities"
        onKeyUp={key => setSearchinput(key.target.value)}
        className="border-4 py-3 rounded-xl p-2"
      />
      <div className="pageCities flex justify-center items-center flex-wrap">
        {arrayFilter.length > 0 ?
          arrayFilter.map(  city =>  <Card city={city} key={city.id}/>) : <Response />}
      </div>
    </div>
  );
}
