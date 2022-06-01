import { useEffect } from "react";
import { getPhotos } from "../../store/photos";
import { useSelector, useDispatch } from "react-redux";
import "./Photos.css";

export default function Photos() {
  const photos = useSelector((state) => {
    return Object.values(state.photos);
  });

  console.log(photos)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div id="body">
      <ul id="img-container">
        {photos.map((photo) => (
          <li key={photo.id} className="li">
            <a href={`/photos/${photo.id}`}>
              <img className="photo" src={photo.imageUrl}></img>
            </a>
            <div className="photo-description">{photo.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
