import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
const Comments = ({ selectPhoto }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const comments = Object.values(useSelector((state) => state.comments));
  const selectPhotoComments = comments.filter(
    (comment) => comment.photoId === selectPhoto?.id
  );


  return (
    <div id="comments">
      {selectPhotoComments.map((comments) => (
        <div id="comments-details">
        <div id="comment-username">{comments.User.username}</div>
        <div>{comments.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
