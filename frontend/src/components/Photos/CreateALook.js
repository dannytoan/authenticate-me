import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLook } from "../../store/photos"
import { useHistory } from "react-router-dom";
import "./CreateALook.css"

const CreateALook = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [collectionId, setCollectionId] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const photo = useSelector((state) => Object.values(state.photos))

  const handleSubmit = async (e) => {
      e.preventDefault();

      const payload = {
        collectionId,
        imageUrl,
        description
      }

      let createdLook = dispatch(createLook(payload));

      console.log(createdLook)
      if (createdLook) {
        history.push(`/photos/${createdLook.id}`);
      }
  }

  return (
    <div>
      <div id="form-container">
        <form id="form">
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            />
          <label>Collection: </label>
          <select className="input select">
            hey lol
            <option className="input select">hey</option>
          </select>
          <button className="submit">Submit</button>

        </form>
        <img src={photo.imageUrl}></img>
      </div>
    </div>
  );
};

export default CreateALook;
