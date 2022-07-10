import React from "react";
import commentsAction from "../redux/actions/commentsAction";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useState } from "react";




export default function AddComent({itineraryId, setReload, user}) {
    

    const dispatch = useDispatch()
    const [inputComment, setInputComment] = useState("");



    async function addComment(event) {
    
        event.preventDefault();
        if (inputComment === "") {
          toast("Rellena el campo de comentario");
          return;
        }
        if (!user) {
          toast("Please login to comment");
          return;
        }
        const comment = {
          comment: inputComment,
          itinerary: itineraryId
        };
    
        const res = await dispatch(commentsAction.addComment(comment));
        if (res.data.toast) {
          toast.success("Commentary post");
          setInputComment("");
          setReload(r => !r);
        // document.getElementById("newComment").textContent = "";
        } else {
          toast.error("Error, try in a few minutes");
        }
        
      }


  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div className="flex justify-center w-full items-center flex-col gap-3">
        <input  type="text" value={inputComment} placeholder={'...'} spellCheck={false} className="bg-white w-full sm:w-5/6 text-center h-16 rounded-2xl flex justify-center items-center" onChange={event => setInputComment(event.target.value)}/>
        <button className="border-2 text-white p-2 w-3/5 rounded-md shadow-md shadow-gray-400" onClick={addComment}>Comment</button>
      </div>

      {!user ? <h2 className="text-yellow-300 italic text-center text-2xl"> "You need login to comment" </h2> : null}
    </div>
  );
}
