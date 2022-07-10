import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itineraryAction from "../redux/actions/itineraryAction";
import NotItinerary from "./NotItinerary";
import Activities from "./Activities";
import Comments from "./Comments";
import toast from "react-hot-toast";
import { AiOutlineComment } from "react-icons/ai";

export default function Itineraries({ id }) {
  let emoticon = "💵";
  let emoticonLike = "❤";
  let noEmoticonLike = "🤍";

  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [itineraries, setItineraries] = useState();

  useEffect(() => {
    dispatch(itineraryAction.getItineratyForCity(id)).then((itineraries) =>
      setItineraries(itineraries.data.response)
    );
  }, [reload]);

  const user = useSelector((store) => store.userReducer.user);

  async function likeDislike(idItinerary) {
    const res = await dispatch(itineraryAction.likeDislike(idItinerary));
    if (res.data.message === true) {
      toast("Done Like!", {
        icon: "👍",
      });
    } else {
      toast("Done Dislike!", {
        icon: "👎",
      });
    }
    setReload(!reload);
  }

  return (
    <div className="flex flex-col gap-5 pb-5 w-full sm:w-10/12 items-center">
      {itineraries?.length > 0 ? (
        itineraries?.map((iti, index) => (
          <div key={index} className="flex flex-col w-11/12 mt-10 shadow-xl shadow-slate-200/75 rounded-lg border-2 border-x-yellow-500">
            <div className="flex flex-col relative">
              <div className="flex flex-grow flex-col items-center rounded-t-xl w-full">
                <h2 className="font-bold text-5xl sm:text-6xl mt-5 text-center text-white textPopular">
                  {iti?.itineraryName}
                </h2>

                <div className="flex mt-3 items-center justify-center gap-3 self-stretch">
                  <img
                    className="w-20 h-20 rounded-full border-4"
                    src={iti?.userPhoto}
                    alt={iti?.userName}
                  />
                  <p className="align-middle text-white text-xl sm:text-2xl md:text-3xl font-bold">
                    {iti?.userName}
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-5 items-center gap-3 justify-center mb-5 sm:mb-5">
              
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-bold text-white">Price:</p>
                  <div>{emoticon.repeat(iti?.price)}</div>
                </div>
                <div className="text-lg font-bold text-white">Time: {iti?.time}</div>

                <div className="flex flex-wrap gap-1 justify-center sm:gap-4 md:gap-10 mb-1">
                  {iti?.tags.map((tag) => {
                    return (
                      <p className="hover:underline cursor-pointer text-white" key={tag}>
                        {tag}
                      </p>
                    );
                  })}
                </div>

                {user ? 
              <div className='text-xl flex'>
                <button onClick={() => likeDislike(iti?._id)}>
                  {iti?.likes.includes(user.userData?.id) ? 
                <p>{emoticonLike}</p> : <p>{noEmoticonLike}</p>}
                  </button>
                  <h3 className="text-white">{iti?.likes.length}</h3>
                </div>
                
              :
              <div className='text-xl flex'>
                <button onClick={() => toast('login please',{
                  icon: '🔴'
                })}>
                  {noEmoticonLike}
                  </button>
                  <h3 className="text-white">{iti?.likes.length}</h3>
                </div>
            }
              
            </div>

            <main className="rounded-b-2xl">
              <section className="shadow row">
                <div className="tabs">
                  <div className=" tab">
                    <div className="relative">
                      <input
                        className="w-full absolute z-10 cursor-pointer opacity-0 h-20"
                        type="checkbox"
                        id="chck1"
                      />
                      <header
                        className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label"
                        htmlFor="chck1"
                      >
                        <div>
                          <AiOutlineComment style={{color:'white', fontSize: '50px'}} />
                        </div>
                        <span className="text-white font-bold text-center text-xl">
                           Activities & Comments
                        </span>
                        <div className="rounded-full border-2 border-grey w-9 h-9 flex items-center justify-center test">
                          <svg
                            aria-hidden="true"
                            className=""
                            data-reactid="266"
                            fill="none"
                            height="24"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </header>
                      <div className="tab-content">
                        <div className="rounded-b-2xl flex flex-col items-center">
                          <Activities id={iti?._id} />
                          <Comments user={user} itinerary={iti} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        ))
      ) : (
        <NotItinerary />
      )}
    </div>
  );
}
