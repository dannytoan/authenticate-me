import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { editPhotoDetail, getPhotoDetail } from "../../store/photos";
import { getCollections } from "../../store/collections";
import { useParams, useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./EditPhoto.css";

function EditPhotoForm({setShowModal}) {

  const { id } = useParams();
  const history = useHistory();

  const photo = Object.values(useSelector((state) => state.photos));
  const selectPhoto = photo.filter((photo) => {
    return photo.id === +id;
  })[0];

  const collections = Object.values(useSelector((state) => state.collections));

  const dispatch = useDispatch();
  const [description, setDescription] = useState(selectPhoto?.description);
  const [imageUrl, setImageUrl] = useState(selectPhoto?.imageUrl);
  const [collectionId, setCollectionId] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getPhotoDetail(id));
    if (photo) {
      return;
    }
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      description,
      imageUrl,
      collectionId
    };

    let updatedPhoto = dispatch(editPhotoDetail(id, payload));

    dispatch(editPhotoDetail(id, payload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (updatedPhoto) {
      setShowModal(false)
    }
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
        <label className="edit-photo-label">Collection: </label>
          <select
            className="select-collection-editphoto"
            onChange={(e) => setCollectionId(e.target.value)}
            >
              <option value={null}>No Collection Selected</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.title}
              </option>
            ))}
          </select>
        <button id="edit-photo-submit" type="submit">
          Submit Changes
        </button>
      </form>
    </div>
  );
}

export default EditPhotoForm;
