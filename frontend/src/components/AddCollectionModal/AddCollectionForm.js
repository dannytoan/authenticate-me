import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createCollection } from "../../store/collections";
import { useParams, useHistory } from "react-router-dom";
import "./AddCollection.css";

function AddCollectionForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");

  const [errorMessages, setErrorMessages] = useState({});
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      title,
      coverImg,
    };

    dispatch(createCollection(payload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    setErrorMessages({});
  };

  return (
    <div id="add-collection-modal-body">
      <h1 id="add-collection-title">ADD A NEW COLLECTION</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.length ? (
            errors.map((error, idx) => <li key={idx}>{error}</li>)
          ) : (
            <></>
          )}
        </ul>
        <label>Name your collection:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter collection name"
          required
        />
        <label>Cover Image URL:</label>
        <input
          type="text"
          value={coverImg}
          onChange={(e) => setCoverImg(e.target.value)}
          placeholder="Insert Image URL"
          required
        />
        <button id="submit-new-collection">Submit</button>
      </form>
    </div>
  );
}

export default AddCollectionForm;
