import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import commentsAction from "../redux/actions/commentsAction";
import { useEffect } from "react";
import itineraryAction from "../redux/actions/itineraryAction";
import toast from "react-hot-toast";
import Comment from "./Comment";

export default function Comments(props) {
  console.log(props);
  const dispatch = useDispatch();
  const [commentaries, setCommentaries] = useState();
  const [inputComment, setInputComment] = useState("");
  const [reload, setReload] = useState(false);
 
  useEffect(() => {
    async function itinerary() {
      const res = await dispatch(
        itineraryAction.getOneItinerary(props.itinerary._id)
      );

      setCommentaries(res.data.response.comments);
    }
    itinerary();
  }, [reload]);

  async function addComment(event) {
    event.preventDefault();
    if (inputComment === "") {
      toast("Rellena el campo de comentario");
      return;
    }
    if (!props.user) {
      toast("Please login to comment");
      return;
    }
    const comment = {
      comment: inputComment,
      itinerary: props.itinerary._id,
    };

    const res = await dispatch(commentsAction.addComment(comment));
    if (res.data.toast) {
      toast.success("Commentary post");
      setReload(!reload);
    } else {
      toast.error("Error, try in a few minutes");
    }
    setInputComment("");
    document.querySelector("#newComment").textContent = "";
  }

  return (
    <>
      <div className="flex flex-col items-center w-11/12 mb-2">
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
            <div className=" flex-grow flex flex-col my-5 items-center gap-5">
              <div
                id="newComment"
                spellCheck={false}
                placeholder="asd"
                onInput={(event) =>setInputComment(event.currentTarget.textContent)}
                contentEditable
                className="bg-white w-10/12 h-16 rounded-2xl flex justify-center items-center"
              ></div>
              <button
                className="border-2 text-white p-2 rounded-md"
                onClick={addComment}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
