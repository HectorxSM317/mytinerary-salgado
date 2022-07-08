import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import commentsAction from  '../redux/actions/commentsAction'
import { useEffect } from "react";
import itineraryAction from "../redux/actions/itineraryAction";


export default function Comments(props) {

  const dispatch = useDispatch()
  const [inputText, setInputText] = useState()
  const [commentaries, setCommentaries] = useState()
  const [reload, setReload] = useState(false)

  useEffect(() => {
    
    async function itinerary(){
      const res = await dispatch(itineraryAction.getOneItinerary(props.itinerary._id))
    
      setCommentaries(res.data.response.comments)
    }
    itinerary()
},[reload])


  async function addComment(event){
    event.preventDefault()
    const comment = {
      comment: inputText,
      itinerary: props.itinerary._id
    }
    
    await dispatch(commentsAction.addComment(comment))
    
    setInputText("")
    setReload(!reload)
  }

  async function modifyComment(id){
   
    const comment = {
      commentID: id,
      comment: inputText
      
    }

    await dispatch(commentsAction.modifyComment(comment))
    setReload(!reload)
  }

  async function deleteComment(id){

        await dispatch(commentsAction.deleteComment(id))
    setReload(!reload)
  }



  return (
    <>
    
    <div className="flex flex-col items-center w-11/12 mb-2">
      <h2 className="text-white text-4xl">Comments</h2>

      <div className="w-full flex flex-grow m-2 gap-2">

        <div className="flex flex-col flex-grow">

          <div className="flex flex-col gap-2">


             {commentaries?.map((comment, index) => {
              return (
              <div key={index} className="relative flex flex-col" >
                <div className="flex gap-5">
                  <div className="flex justify-center flex-col items-center ">
                    <img className="w-12 h-12 rounded-full object-fit" src={comment.userID.photoUser} alt="user" />
                    <p className="text-white">{comment.userID.firstName}</p>
                  </div>
                  <div key={index} className='flex-grow border-2 rounded-2xl my-3 '>
                  {comment.userID._id === props.user.id ? 
                      <div  key={index} onInput={(event) => setInputText(event.currentTarget.textContent)} contentEditable className="text-lg text-white flex items-center justify-center h-16 cursor-pointer " suppressContentEditableWarning={true}>{comment.comment}</div>
                       :
                        <div  key={index} onInput={(event) => setInputText(event.currentTarget.textContent)} className="text-lg text-white flex items-center justify-center h-16 pointer-events-none" suppressContentEditableWarning={true}>{comment.comment}</div>
                  }
                    </div> 
                  
                
                </div>
                  {props.user && comment.userID._id === props.user.id? 
                <div className=" flex flex-col gap-3">
                      
                  <div className="flex justify-center gap-10">
                    <button onClick={() => modifyComment(comment._id)} className="border-2 duration-300 bg-orange-400 text-4xl italic  hover:bg-orange-700 tras rounded-2xl text-white p-2">Modify</button>
                    <button onClick={() => deleteComment(comment._id)} className="border-2 duration-300 bg-orange-400 text-4xl italic  hover:bg-orange-700 tras rounded-2xl text-white p-2">delete</button>
                    </div>
                  </div>
                       : null

                  }

              </div>

              )
            })} 
          </div>

           <div className=" flex-grow flex flex-col my-5 items-center gap-5">
            <input placeholder="leave your comments" className="cursor-pointer rounded-2xl text-center w-10/12 h-16" type="text" onKeyUp={e => setInputText(e.target.value)} />
            <button className="border-2 text-white p-2" onClick={addComment} type="submit">Comment</button>
          </div> 

         </div> 
        </div> 
     </div>


  
    </>
  );
}
