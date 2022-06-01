import { useEffect } from "react";
import { getCollections } from "../../store/collections";
import { useSelector, useDispatch } from "react-redux";

export default function Collections() {

  const collections = Object.values(useSelector((state) => state.collections));
    console.log(collections)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
      <div id="collections-body">
          <h1>This is collections!!!!!!!!!!</h1>
            <div>
                <ul>
                    {collections.map((collection) => (
                        <li key={collection.id}>
                            {collection.title}
                        </li>
                    ))}
                </ul>
            </div>
      </div>

  );
}
