import { useState } from "react";
import { useDispatch } from "react-redux";
import { editComment, deleteComment } from "../../store/comments";

function EditComment({ commentData }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(commentData.comment);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();

    const payload = {
      comment,
    };

    const editedComment = dispatch(editComment(commentData.id, payload));

    if (editedComment) {
      setShowEdit(false);
    }
  };

  const onEdit = (e) => {
    e.preventDefault();

    if (showEdit) {
        setShowEdit(false)
    } else {
        setShowEdit(true)
    }
  }

  return (
    <div>
      <i
        class={showEdit === false ? "fa-solid fa-pen-to-square" : "fa-solid fa-xmark"}
        onClick={onEdit}
      ></i>
      <form onSubmit={handleEdit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className={showEdit ? "showEdit" : "hideShowEdit"}
          />
        <button
          className={showEdit ? "showEdit" : "hideShowEdit"}

          >Submit</button>
        <button
          className={showEdit ? "showEdit" : "hideShowEdit"}

        onClick={() => dispatch(deleteComment(commentData.id)) && window.location.reload(false)}>Delete</button>
      </form>
    </div>
  );
}

export default EditComment;
