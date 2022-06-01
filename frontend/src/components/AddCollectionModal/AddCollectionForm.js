import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createCollection } from "../../store/collections";
import { useParams, useHistory } from "react-router-dom";
import "./AddCollection.css";

function AddCollectionForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [coverImg, setCoverImg] = useState("https://64.media.tumblr.com/ac88407f476f729a31b373a279fbdb8b/e8ca1e3317a310f9-fe/s540x810/0ebf89b39353d29e3ad7db2ca87a057add568036.jpg")

    const [errorMessages, setErrorMessages] = useState({});
    const [errors, setErrors] = useState([]);

    const { id } = useParams();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
          title,
          coverImg
        };

        // let updatedPhoto = dispatch(editPhotoDetail(id, payload));

        dispatch(createCollection(payload)).catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });

        // if (updatedPhoto) {
          setErrorMessages({});
        //   history.push(`/photos/${id}`);
        // }
      };

      return (
          <div>Add a collection!!!!!!!</div>
      )

}

export default AddCollectionForm;
