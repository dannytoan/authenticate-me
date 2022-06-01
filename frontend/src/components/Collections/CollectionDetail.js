import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getCollectionDetail } from "../../store/collections";

const CollectionDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { id } = params;

    const collections = Object.values(useSelector((state) => state.collections));
    console.log("COLLECTION", collections)

    const selectCollection = collections.filter((collection) => {
        return collection.id === +id;
    })[0];

    // const collectionPhotos = collections.find(photos =>
    //     selectCollection.id === photo.CollectionId(?))


    useEffect(() => {
        dispatch(getCollectionDetail(id));

        if (collections) {
            return;
        }
    }, [dispatch, id])


    return (
        <div>
            <h1>{selectCollection?.title}</h1>
            <div></div>
        </div>
    )
}


export default CollectionDetail;
