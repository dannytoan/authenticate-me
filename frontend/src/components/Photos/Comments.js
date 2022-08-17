import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getComments } from "../../store/comments";
import EditComment from "../EditComment";
import "./Comments.css";

const Comments = ({ selectPhoto }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const comments = Object.values(useSelector((state) => state.comments));
  const selectPhotoComments = comments.filter(
    (comment) => comment.photoId === selectPhoto?.id
  );

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div id="comments">
      {selectPhotoComments.map((comments) => (
        <div id="comments-details">
          <div id="comment-username">{comments.User?.username}</div>
          <div>{comments.comment}

          {sessionUser.id === comments.userId && (
            <div>
              <EditComment
                commentData={comments}
              />
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
