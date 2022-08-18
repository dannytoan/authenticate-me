import { useEffect } from "react";
import { getCollections } from "../../store/collections";
import { useSelector, useDispatch } from "react-redux";
import AddCollectionFormModal from "../AddCollectionModal";
import { Modal } from "../../context/Modal";
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
      <div id="collections-header-cntr">

      <div id="collections-title">My Collections</div>
      <AddCollectionFormModal />
      </div>

      <div id="collections-container">
        {collections.length ? collections.map((collection) => (
          <div key={collection.id} className="collections-li">
            <a id="anchor" href={`/collections/${collection.id}`}>
              <img className="collection-cover-img" src={collection.coverImg} />
              <div className="collection-overlay-ctnr">
                <div className="select-collection-title">{collection.title}</div>
                <div>{collection.Photos.length} Looks</div>
              </div>
            </a>
          </div>
        )) : <div className="text">"You have no collections!"</div>}
      </div>
    </div>
  );
}
