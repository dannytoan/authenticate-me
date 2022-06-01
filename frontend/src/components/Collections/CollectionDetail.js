import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getCollectionDetail } from "../../store/collections";
import { getPhotos } from "../../store/photos";
import "./CollectionDetail.css"

const CollectionDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { id } = params;

  const collections = Object.values(useSelector((state) => state.collections));

  const selectCollection = collections.filter((collection) => {
    return collection.id === +id;
  })[0];

  const photo = Object.values(useSelector((state) => state.photos));
  const filteredPhotos = photo.filter(selectPhoto => selectPhoto.collectionId === +id)
  console.log("PHOTO INSIDE COLLECTION DETAIL", photo)
  console.log("FILTERED PHOTOS", filteredPhotos)

  useEffect(() => {
    dispatch(getCollectionDetail(id));

    if (collections) {
      return;
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPhotos(id));
  }, []);

  return (
    <div id="collection-detail-body">
      <h1 id="collection-title">{selectCollection?.title}</h1>
      <button>Edit</button>
      <button>Delete</button>
      <div id="imgs-container">
        {filteredPhotos.map((image) => (
          <li key={image.id} id="li">
            <a href={`/photos/${image.id}`}>
              <img id="collection-detail-img" src={image.imageUrl} />
                <div id="image-title">{image.description}</div>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetail;
