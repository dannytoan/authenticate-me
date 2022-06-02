import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { editPhotoDetail } from "../../store/photos";
import { useParams, useHistory } from "react-router-dom";
import { Modal } from '../../context/Modal';
import "./EditPhoto.css";

function EditPhotoForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [errors, setErrors] = useState([]);

  const { id } = useParams();
  const history = useHistory();

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
    //   history.push(`/photos/${id}`);
    // }
  };

  return (
    <div id="edit-photo-modal-body">
      <h1 id="edit-photo-title">Edit Photo</h1>
      <form id="edit-photo-form" onSubmit={handleSubmit}>
        <ul>
          {(errors.length) ? (errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))) : <></>}
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
          placeholder="Enter a new image URL"
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
