import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getComments } from "../../store/comments";
import PhotoDetail from "./PhotoDetail";

const Comments = ({ selectPhoto }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const comments = Object.values(useSelector((state) => state.comments));
  // const strippedCommentsArr = comments.map((comment) => comment);
  const selectPhotoComments = comments.filter(
    (comment) => comment.photoId === selectPhoto?.id
  );

  console.log("COMMENTS", comments);
  // console.log("SELECT PHOTO", selectPhoto)
  console.log("SELECT PHOTO COMMENTS", selectPhotoComments);

  useEffect(() => {
    dispatch(getComments());
    console.log("INSIDE THE USE EFFECT");
    if (comments) {
      return;
    }
  }, [dispatch]);

  return (
    <div>
      <table id="comments-table">
        <thead>
          <tr>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {selectPhotoComments.map((comments) => (
            <tr key={comments.id}>
                <td>{comments.comment}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
