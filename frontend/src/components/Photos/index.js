import { useEffect } from "react";
import { getPhotos } from "../../store/photos";
import { useSelector, useDispatch } from "react-redux";
import "./Photos.css";

export default function Photos() {
  const photos = useSelector((state) => {
    return Object.values(state.photos);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div id="body">
      <div id="img-container">
        <h2 id="h2-explore-title">Explore</h2>
        <div id="all-photos-ctnr">

        {photos.map((photo) => (
          <div key={photo.id} className="li">
            <a href={`/photos/${photo.id}`}>
              <img className="photo" src={photo.imageUrl}></img>
            <div className="photo-description-overlay">{photo.description}</div>
            </a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
