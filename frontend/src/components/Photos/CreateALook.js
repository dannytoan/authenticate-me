import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLook } from "../../store/photos";
import { useHistory } from "react-router-dom";
import { getCollections } from "../../store/collections";
import "./CreateALook.css";

const CreateALook = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [collectionId, setCollectionId] = useState(null);
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const collections = Object.values(useSelector((state) => state.collections));

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const payload = {
      userId: sessionUser.id,
      collectionId,
      imageUrl,
      description,
    };

    dispatch(createLook(payload)).catch(async (res) => {
      const data = await res.json();
      console.log("DATA", data)
      if (data && data.errors) setErrors(data.errors);
    });


    if (errors.length < 0 && payload) {
      return;
    }


    // if (errors.length === 0){
    //     history.push(`/photos`);
    // }

  };

  return (
    <div>
      <div id="form-container">
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
            <div id="add-a-look-errors">
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx} className="add-a-look-li">{error}</li>
                ))}
              </ul>
            </div>
          <label className="add-a-look-labels">Image URL: </label>
          <input
            type="text"
            placeholder="Insert image URL here..."
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input"
            />
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
            <option value={null} >Choose a collection</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.title}
              </option>
            ))}
          </select>
          {/* <a href="/photos"> */}
          <button
            className="submit"
          >
            Submit
          </button>
          {/* </a> */}
        </form>
      </div>
    </div>
  );
};

export default CreateALook;
