import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createCollection } from "../../store/collections";
import { useParams, useHistory } from "react-router-dom";
import "./AddCollection.css";

function AddCollectionForm({setShowModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");

  // const [errorMessages, setErrorMessages] = useState({});
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      title,
      coverImg,
    };

    const newCollection = dispatch(createCollection(payload));

    // newCollection.catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // });

    if (newCollection) {
      setShowModal(false)
    }
  };

  useEffect(() => {
    const errors = [];

    if (title.length < 1) {
      errors.push("Please provide a title.")
    } else if (title.length > 20) {
      errors.push("Title may not exceed over 20 characters.")
    }

    if (!(coverImg.includes(".jpg" || ".png"))) {
      errors.push("Please provide a valid Image URL.")
    }

    setErrors(errors);
  }, [title, coverImg]);

  return (
    <div id="add-collection-modal-body">
      <h1 id="add-collection-title">ADD A NEW COLLECTION</h1>
      <form id="add-collection-form" onSubmit={handleSubmit}>
      {errors.includes("Please provide a title." || "Title may not exceed over 20 characters." || "Please provide a valid Image URL.") ? <></> : <ul>
                {errors.map((error, idx) => (
                  <li key={idx} className="add-a-look-li">{error}</li>
                ))}
              </ul>}
        <label className="add-collection-form-labels">Name your collection:</label>
        <input
          className="add-collection-form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter collection name"
          required
        />
        <label className="add-collection-form-labels">Cover Image URL:</label>
        <input
        className="add-collection-form-input"
          type="text"
          value={coverImg}
          onChange={(e) => setCoverImg(e.target.value)}
          placeholder="Insert Image URL"
          required
        />
        <button
        id="submit-new-collection"
        disabled={(errors.length > 0)}
        >Submit</button>
      </form>
    </div>
  );
}

export default AddCollectionForm;
