import { createComment } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

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

        dispatch(createComment(payload))
    }

    return (
        <div>
            <div>NEW COMMENT FORM</div>
            <form onSubmit={handleSubmit}>
                <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                required
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewCommentForm;
