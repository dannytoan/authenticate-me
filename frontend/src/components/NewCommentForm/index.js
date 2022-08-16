import { createComment } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import "./NewCommentForm.css"
import { useState } from "react";

function NewCommentForm({photoId}) {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            photoId: photoId,
            comment
        }

       const newComment = dispatch(createComment(payload))

       if (newComment) {
        window.location.reload(false)
       }
    }

    return (
        <div id="new-comment-form-ctnr">
            <form id="new-comment-form" onSubmit={handleSubmit}>
                <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                id="new-comment-form-textarea"
                required
                />
                <button id="new-comment-form-submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default NewCommentForm;
