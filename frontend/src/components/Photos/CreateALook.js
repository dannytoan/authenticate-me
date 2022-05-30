import { useState } from "react";
import "./CreateALook.css"

const CreateALook = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");

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
      </div>
    </div>
  );
};

export default CreateALook;
