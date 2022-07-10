import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import itineraryAction from "../redux/actions/itineraryAction";
import Comment from "./Comment";
import AddComent from "./AddComent";



export default function Comments(props) {
  const dispatch = useDispatch();
  const [commentaries, setCommentaries] = useState();
  const [reload, setReload] = useState(false);
 
  useEffect(() => {
    async function itinerary() {
      const res = await dispatch(itineraryAction.getOneItinerary(props.itinerary._id)
      );

      setCommentaries(res.data.response.comments);
    }
    itinerary();
    // eslint-disable-next-line
  }, [reload]);

  

  return (
    <>
      <div className="flex flex-col items-center w-11/12 mb-2">

        <h3></h3>
        <h2 className="text-white text-4xl">Comments</h2>

        <div className="w-full flex flex-grow m-2 gap-2">
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col gap-2">
              {commentaries?.map((comment) => (
                <Comment key={comment._id}
                  comment={comment}
                  user={props.user}
                  setReload={setReload}
                />
              ))}
            </div>
            <div className=" flex-grow flex flex-col my-5 items-center gap-1">
                {props.user ? 
                <div className="flex items-center self-start gap-1">
                  <img className="w-8 h-8 rounded-full object-fit" src={props.user.userData.photoUser} alt="user" /> 
                  <p className="text-white">{props.user.userData.firstName}</p>
                  {props.user.userData.lastName ? <p className="text-white">{props.user.userData.lastName}</p> : null}
                </div>
              :null  
              }
                <AddComent itineraryId={props.itinerary._id} setReload={setReload} user={props.user}/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
