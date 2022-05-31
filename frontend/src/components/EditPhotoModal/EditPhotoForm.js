import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./EditPhoto.css";

function EditPhotoForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   };

const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div id="edit-photo-modal-body">
        <h1 id="edit-photo-title">Edit Photo</h1>
      <form id="edit-photo-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
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
        />
        <button id="edit-photo-submit" type="submit">Submit Changes</button>
      </form>
    </div>
  );
}

export default EditPhotoForm;
