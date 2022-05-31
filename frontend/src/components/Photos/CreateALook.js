import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLook } from "../../store/photos";
import { useHistory } from "react-router-dom";
import "./CreateALook.css";

const CreateALook = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [collectionId, setCollectionId] = useState(null);

  //   const collection = useSelector(state => state.photo)
  //   console.log("COLLECTION", collection)
  const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser, "SESSION USER")


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

    if (createdLook) {
      history.push(`/photos/`);
    }
  };


  return (
    <div>
      <div id="form-container">
        <form id="form" onSubmit={e => handleSubmit(e)}>
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
          <button className="submit">Submit</button>
        </form>
        <img src={photo.imageUrl}></img>
      </div>
    </div>
  );
};

export default CreateALook;
