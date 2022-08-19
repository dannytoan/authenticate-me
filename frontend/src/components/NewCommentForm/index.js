import { createComment } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import "./NewCommentForm.css";
import { useState, useEffect } from "react";

function NewCommentForm({ photoId }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (comment.length >= 250) {
      errors.push("Comment must not exceed 250 characters.");
    } else if (comment.length <= 10) {
      errors.push("Comment must be between 10 to 250 characters.");
    }

    setErrors(errors);
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      photoId: photoId,
      comment,
    };

    const newComment = dispatch(createComment(payload));

    if (newComment) {
      window.location.reload(false);
    }
  };

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
          <div id="new-comments-error-valids">
            {errors.map((error, idx) => (
              <div key={idx}>
                {error}
              </div>
            ))}
          </div>
        <button id="new-comment-form-submit-btn" disabled={errors.length}>Submit</button>
      </form>
    </div>
  );
}

export default NewCommentForm;
