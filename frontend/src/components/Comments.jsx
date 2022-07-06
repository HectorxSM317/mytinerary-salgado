import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import commentsAction from  '../redux/actions/commentsAction'

export default function Comments({ user, itineraryId}) {
  console.log(user)
  const dispatch = useDispatch()
  const [comment, setComment] = useState()

  async function addComment (event){
    event.preventDefault()

    const comment = {
      comment: comment,
      itinerary: itineraryId
    }
    
    const res = await dispatch(commentsAction.addComment(comment))
    console.log(res)


  }




  return (
    <>
    
    <div className="flex flex-col items-center w-11/12 border-2 mb-2">
      <h2 className="text-white">Comments</h2>
      <div className="w-11/12 flex m-2 gap-2">
        <div className="flex border-2">
        <img className="w-8 h-8 rounded-full object-fit" src="" alt="user" />
          <p className="text-white"></p>
        </div>
        <div className="flex-grow border-2">
          <input type="text" onKeyUp={e => setComment(e.target.value)} />
          <button onClick={addComment} type="submit">mo</button>
        </div>
      </div>
    </div>


  
    </>
  );
}
