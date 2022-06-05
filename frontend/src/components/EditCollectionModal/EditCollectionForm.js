import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { editSelectedCollection } from "../../store/collections";
import { useParams, useHistory } from "react-router-dom";
import "./EditCollectionForm.css"


function EditCollectionForm({setShowModal}) {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const { id } = useParams();

    const collections = Object.values(useSelector((state) => state.collections));
    console.log("COLLECTIONS", collections)

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            title
        }

        let updatedCollectionTitle = dispatch(editSelectedCollection(id, payload));

        if (updatedCollectionTitle) {
            setShowModal(false)
        }
    }

    return(
        <div id="edit-collection-container">
            <h1 id="new-collection-title">NEW COLLECTION TITLE</h1>
            <form id="edit-collection-form" onSubmit={handleSubmit}>
                {/* <label id="enter-title-label">Enter a new title: </label> */}
                <input
                id="enter-title-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a new title"
                className="edit-collection-input"
                />
                <button id="new-title-submit">Submit</button>
            </form>
        </div>
    )
}

export default EditCollectionForm;
