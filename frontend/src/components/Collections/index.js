import { useEffect } from "react";
import { getCollections } from "../../store/collections";
import { useSelector, useDispatch } from "react-redux";
import "./Collections.css";

export default function Collections() {
  const collections = Object.values(useSelector((state) => state.collections));
  // console.log(collections)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <div id="collections-body">
      <h1 id="collections-title">COLLECTIONS</h1>

      <div id="collections-container">
        {collections.map((collection) => (
          <div key={collection.id} id="collections-li">
            <a id="anchor" href={`/collections/${collection.id}`}>
              <img id="collection-cover-img" src={collection.coverImg} />
            <h3 id="select-collection-title">{collection.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
