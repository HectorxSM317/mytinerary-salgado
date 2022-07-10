import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import activitiesActions from "../redux/actions/activitiesActions";

export default function Activities({ id }) {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activities = async () => {
      const activities = await dispatch(
        activitiesActions.getActivitiesFromItinerary(id)
      );
      setActivities(activities);
    };
    activities();
  }, [id]);

  return (
    <>
      {activities.length > 0 ? (
        <div className="w-11/12 flex flex-wrap justify-center py-5 gap-2">
          {activities?.map((act, index) => (
            <div key={index} className="relative w-72">
              <h2 className="bg-slate-900/50 absolute text-teal-100 lg:text-2xl text-center w-full font-mono font-bold">
                {act.name}
              </h2>
              <img
                className="w-full h-56 object-cover"
                src={act.image}
                alt={act.name}
              />
            </div>
          ))}
        </div>
      ) : (
        <p  className="text-white italic text-4xl py-5">This itinerary haven't activities</p>
      )}
    </>
  );
}
