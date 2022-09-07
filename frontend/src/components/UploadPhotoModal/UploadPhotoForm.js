import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLook } from "../../store/photos";
import { useHistory } from "react-router-dom";
import { getCollections } from "../../store/collections";
import "./UploadPhotoForm.css";

const UploadPhotoForm = ({ setShowModal }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [collectionId, setCollectionId] = useState(1);
  const [errors, setErrors] = useState([]);

  // FOR AWS
  // const [image, setImage] = useState(null);

  const sessionUser = useSelector((state) => state.session.user);
  const photos = useSelector((state) => Object.values(state.photos))

  const dispatch = useDispatch();
  const history = useHistory();

  const collections = Object.values(useSelector((state) => state.collections));

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  useEffect(() => {
    const errors = [];

    // if (imageUrl.length < 1) {
    //   errors.push("Please provide an Image URL.");
    // }

    // if (!imageUrl.includes(".jpg" || ".png")) {
    //   errors.push("Please provide a valid Image URL.");
    // }

    if (description.length < 1) {
      errors.push("Please provide a title.");
    } else if (description.length < 1 || description.length > 32) {
      errors.push(
        "Title must contain at least 1 and no more than 32 characters."
      );
    }

    setErrors(errors);
  }, [description]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: (photos[photos.length - 1]?.id) + 1,
      userId: sessionUser.id,
      collectionId,
      imageUrl,
      description,
    };

    dispatch(createLook(payload));
    setShowModal(false);

    history.push("/photos");
  };

  // FOR AWS
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImageUrl(file);
  };

  return (
    <div id="form-container">
      <div>
        <form id="upload-photo-modal-form" onSubmit={(e) => handleSubmit(e)}>
          <h1 id="create-a-look-header">Upload a Photo</h1>

          <label className="add-a-look-labels">Image URL: </label>
          {/* <input
            type="text"
            placeholder="Insert image URL here..."
            // required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input"
          /> */}


          {/* FOR AWS UPLOAD*/}
          <label>
            <input type="file" onChange={updateFile} />
          </label>

          <label className="add-a-look-labels">Title: </label>
          <input
            type="text"
            placeholder="Insert title here..."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          />
          <label className="add-a-look-labels">Collection: </label>
          <select
            className="input select"
            onChange={(e) => setCollectionId(e.target.value)}
          >
            {/* <option value={null}>Choose a collection</option> */}
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.title}
              </option>
            ))}
          </select>
          <button className="submit">
            Submit
          </button>
        </form>
      </div>
      <div id="add-a-look-errors">
        {errors.includes(
          "Please provide an Image URL." ||
            "Please provide a title." ||
            "Please provide a valid Image URL." ||
            "Title must contain at least 1 and no more than 32 characters."
        ) ? (
          <></>
        ) : (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx} className="add-a-look-li">
                {error}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UploadPhotoForm;
