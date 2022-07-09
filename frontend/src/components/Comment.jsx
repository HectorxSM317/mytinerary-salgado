import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import commentsAction from '../redux/actions/commentsAction'
import toast from "react-hot-toast";

export default function Comment({comment, user, setReload}) {
    const dispatch =  useDispatch()

    const [inputModiFy, setInputModify] = useState(comment.comment)
    const [editable, setEditable] = useState(false)

    async function modifyComment(event){
        
        if(inputModiFy == comment.comment)return
   
        const newComment = {
          commentID: event.target.id,
          comment: inputModiFy
          
        }
    
        await dispatch(commentsAction.modifyComment(newComment))
        setReload(r => !r)
        toast.success('Modificated')
        setEditable(false)
      }

      console.log(inputModiFy)
      console.log(comment.comment)
    
      async function deleteComment(id){
    
            await dispatch(commentsAction.deleteComment(id))
        setReload(r => !r)
      }
    

  return (
    
              <div className="relative flex flex-col" >
                <div className="flex gap-5 border-y-2">
                  <div className="flex justify-center flex-col items-center ">
                    <img className="w-12 h-12 rounded-full object-fit" src={comment.userID.photoUser} alt="user" />
                    <p className="text-white">{comment.userID.firstName}</p>
                  </div>
                  <div className='flex-grow my-3 gap-3 flex flex-col sm:flex-row'>
                    {/* text */}
                  {editable ?
                  <input spellCheck={false} className="text-lg bg-transparent text-white flex-grow  flex items-center h-16 cursor-pointer italic" onChange={(event) => comment.userID._id === user?.userData?.id && setInputModify(event.target.value)} value={inputModiFy} /> 
                  :
                  <div itemType="text" spellCheck={false} onClick={()=> comment.userID._id === user?.userData?.id && setEditable(true) }
                   contentEditable={comment.userID._id === user.userData?.id} className="text-lg  flex-grow  text-white flex items-center h-16 cursor-pointer italic" suppressContentEditableWarning={true}>{comment.comment}</div>

                   }
                       
                      {/* buttons */}
                  {user.userData?.id === comment.userID._id  ? 
                      <div className=" flex flex-col gap-3">
                      
                        <div className="flex justify-center sm:flex-col">
                          
                            <div id={comment._id} onClick={modifyComment} className="border-t-2 flex-grow flex justify-center items-center h-8 duration-300 bg-orange-400 px-1 text-xs italic  hover:bg-orange-700 rounded-bl-2xl sm:rounded-none sm:borde-none sm:rounded-tl-xl sm:border-l-2  text-white cursor-pointer">Modify</div>
                          

                          <div onClick={() => deleteComment(comment._id)} className="border-t-2 flex-grow flex justify-center items-center h-8 duration-300 bg-orange-400 px-1 text-xs italic  hover:bg-orange-700 rounded-br-2xl sm:rounded-bl-2xl sm:rounded-none sm:borde-none sm:border-l-2 sm:border-b-2  text-white cursor-pointer">delete</div>
                        </div>
                      </div>

                      // no existe
                      : null

                  }
                    </div> 
                  
                
                </div>
                  

              </div>

              )



}
