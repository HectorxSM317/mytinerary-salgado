import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import commentsAction from "../redux/actions/commentsAction";
import toast from "react-hot-toast";
import { FcNeutralDecision } from "react-icons/fc";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function Comment({ comment, user, setReload }) {
  const dispatch = useDispatch();

  let [inputModiFy, setInputModify] = useState(comment?.comment);
   

  async function modifyComment(event) {
    if (inputModiFy === comment.comment) return;
    if (inputModiFy === ""){
     toast.error("The field can't be empty")
      setReload(r => !r);
      return
    }
  

    const newComment = {
      commentID: event.target.id,
      comment: inputModiFy,
    };

    const res = await dispatch(commentsAction.modifyComment(newComment));
    toast.success("Comment modificated");
    setReload((r) => !r);
    
  }

  async function deleteComment(id) {
    await dispatch(commentsAction.deleteComment(id));
    
    toast.success("Comment deleted");
    setReload((r) => !r);
  }

  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col border-y-2">

        <div className="flex justify-center mt-1 items-center gap-1">
          {comment.userID.photoUser ? 
          <img className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-fit" src={comment.userID.photoUser} alt="user" /> 
          : <FcNeutralDecision /> }
           {comment.userID.lastName ? <p className="text-white">{comment.userID.firstName} {comment.userID.lastName}</p>  : <p className="text-white">{comment.userID.firstName}</p>}
        </div>
        
         

          <div className="flex-grow pt-4 flex flex-col sm:flex-row">
          
              {!user ?
              <div  spellCheck={false} className="text-base justify-center sm:justify-start flex-grow  text-white flex items-center h-16 cursor-pointer italic"
                >{comment.comment}</div>
                :
                user.userData?.id === comment.userID._id ?
                // <div spellCheck={false} className={onClick={true} ? 'underline' : 'text-base bg-transparent text-center sm:text-left flex-grow  text-white h-16 cursor-pointer italic'} onInput={(event) => comment.userID._id === user?.userData?.id && setInputModify(event.currentTarget.textContent)} contentEditable suppressContentEditableWarning={true} defaultValue={inputModiFy}
                //     >{comment.comment}</div>
                  <input spellCheck={false} className="text-base sm:pl-10 pt-2 h-12 w-full break-words bg-transparent text-center sm:text-left flex-grow  text-white cursor-pointer italic"
                    onChange={(event) => comment.userID._id === user?.userData?.id && setInputModify(event.target.value)}
                    value={inputModiFy} />
                  :
                  <div spellCheck={false} className="text-base sm:pl-10  justify-center mb-3 sm:justify-start flex-grow  text-white flex items-center cursor-pointer italic"
                    >{comment.comment}</div>
                }
              {user && user.userData?.id === comment.userID._id ?
              <div className=" flex flex-col gap-3">
                <div className="flex justify-center sm:flex-col">
                  <div
                    id={comment._id}
                    onClick={modifyComment}
                    defaultValue={inputModiFy}
                    className="border-t-2  flex justify-center items-center h-8 duration-300 bg-orange-400 px-1 text-xs italic  hover:bg-orange-700 rounded-tl-xl sm:rounded-none sm:borde-none sm:rounded-tl-xl sm:border-l-2  text-white cursor-pointer"
                  >
                    <AiOutlineEdit style={{fontSize: '25'}}/>
                  </div>
                  <div
                    onClick={() => deleteComment(comment._id)}
                    className="border-t-2  flex justify-center items-center h-8 duration-300 bg-orange-400 px-1 text-xs italic  hover:bg-orange-700 rounded-tr-xl sm:rounded-none sm:borde-none sm:border-l-2 sm:border-b-2  text-white cursor-pointer"
                  >
                    <AiOutlineDelete style={{fontSize: '25'}}/>
                  </div>
                </div>
              </div>
             : // no existe
            null}
          
          
          
        </div>
      </div>
    </div>
  );
}
