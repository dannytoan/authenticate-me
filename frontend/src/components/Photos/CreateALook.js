import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLook } from "../../store/photos";
import { useHistory } from "react-router-dom";
import "./CreateALook.css";

const CreateALook = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [collectionId, setCollectionId] = useState(null);
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const photo = useSelector((state) => Object.values(state.photos));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      collectionId,
      imageUrl,
      description,
    };

    let createdLook = dispatch(createLook(payload));

    dispatch(createLook(payload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (errors.length === 0) {
      history.push(`/photos/`);
      setErrorMessages({});
    }
  };

  return (
    <div>
      <div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
      <div id="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <label>Image URL: </label>
          <input
            type="text"
            placeholder="Insert image URL here..."
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input"
          />
          <label>Title: </label>
          <input
            type="text"
            placeholder="Insert title here..."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          />
          {/* <label>Collection: </label>
          <select
            className="input select"
            value={collectionId}
            onChange={(e) => setCollectionId(e.target.value)}
          ></select> */}
          {/* <a href="/photos"> */}
            <button
              className="submit"
              // disabled={errors.length > 0}
              // href="/photos"
            >
              Submit
            </button>
          {/* </a> */}
        </form>
        <img src={photo.imageUrl}></img>
      </div>
    </div>
  );
};

export default CreateALook;
