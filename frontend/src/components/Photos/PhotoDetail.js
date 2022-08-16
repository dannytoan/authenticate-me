import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPhotoDetail, deleteLook } from "../../store/photos";
import { getCollections } from "../../store/collections";
import Comments from "./Comments";
import EditPhotoFormModal from "../EditPhotoModal";

import "./PhotoDetail.css";

const PhotoDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const photo = Object.values(useSelector((state) => state.photos));
  const selectPhoto = photo.filter((photo) => {
    return photo.id === +id;
  })[0];

  const collections = Object.values(useSelector((state) => state.collections));

  const [collectionId, setCollectionId] = useState(null);

  //   console.log("PHOTO", photo);
  //   console.log("SELECT PHOTO", selectPhoto?.imageUrl);

  useEffect(() => {
    dispatch(getPhotoDetail(id));
    // console.log("INSIDE THE USE EFFECT")
    if (photo) {
      return;
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <div>
      <div id="photo-detail-container">
        <div id="photo-detail-img-ctnr">
          <img
            id="selected-photo"
            className="select-photo"
            src={selectPhoto?.imageUrl}
          ></img>
            <div id="photo-detail-button-container">
              <EditPhotoFormModal />
              <a href="/photos">
                <button
                  className="photo-detail-btn"
                  onClick={() => dispatch(deleteLook(id))}
                >
                  Delete
                </button>
              </a>
            </div>
        </div>
        <div id="photo-detail-bottom-ctnr">
          <div id="photo-detail-details-ctnr">
            <div id="photo-detail-title-ctnr">

            <h1 id="photo-title">{selectPhoto?.description}</h1>
            <div className="text photo-uploader-name">Uploaded by {selectPhoto?.User.username}</div>
            </div>
              <Comments selectPhoto={selectPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
