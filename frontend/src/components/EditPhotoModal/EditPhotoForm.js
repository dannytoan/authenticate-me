import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { editPhotoDetail, getPhotoDetail } from "../../store/photos";
import { useParams, useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./EditPhoto.css";

function EditPhotoForm() {
  const { id } = useParams();
  const history = useHistory();

  const photo = Object.values(useSelector((state) => state.photos));
  const selectPhoto = photo.filter((photo) => {
    return photo.id === +id;
  })[0];

  console.log("SELECTPHOTO", selectPhoto);

  const dispatch = useDispatch();
  const [description, setDescription] = useState(selectPhoto?.description);
  const [imageUrl, setImageUrl] = useState(selectPhoto?.imageUrl);
  const [errorMessages, setErrorMessages] = useState({});
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    dispatch(getPhotoDetail(id));
    // console.log("INSIDE THE USE EFFECT")
    if (photo) {
      return;
    }
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      description,
      imageUrl,
    };

    // let updatedPhoto = dispatch(editPhotoDetail(id, payload));

    dispatch(editPhotoDetail(id, payload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    // if (updatedPhoto) {
    setErrorMessages({});
    //   history.push(`/photos`);
    // }
  };

  return (
    <div id="edit-photo-modal-body">
      <h1 id="edit-photo-title">Edit Photo</h1>
      <form id="edit-photo-form" onSubmit={handleSubmit}>
        <ul>
          {errors.length ? (
            errors.map((error, idx) => <li key={idx}>{error}</li>)
          ) : (
            <></>
          )}
        </ul>
        <label className="edit-photo-label">Title:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a new title"
          className="edit-photo-input"
        />
        <label className="edit-photo-label">Image URL:</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="edit-photo-input"
          // required
        />
        <button id="edit-photo-submit" type="submit">
          Submit Changes
        </button>
      </form>
    </div>
  );
}

export default EditPhotoForm;
