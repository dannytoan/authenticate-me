import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getCollectionDetail } from "../../store/collections";
import { getPhotoDetail, getPhotos } from "../../store/photos";

const CollectionDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { id } = params;

    const collections = Object.values(useSelector((state) => state.collections));
    // console.log("COLLECTION", collections)

    const selectCollection = collections.filter((collection) => {
        return collection.id === +id;
    })[0];

    const photo = Object.values(useSelector((state) => state.photos))

    // console.log("====PHOTO====", photo)



    useEffect(() => {
        dispatch(getCollectionDetail(id));

        if (collections) {
            return;
        }
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getPhotos(id))
    },[])

    // useEffect(() => {
    //     fetch("/api/photos")
    //     .then(response => response.json())
    //     .then(data => setPhotos(data.message))
    // }, [])

    // console.log("===PHOTOS===", photos)


    return (
        <div>
            <h1>{selectCollection?.title}</h1>
            <div>
                {photo.map(image => (
                    <li key={image.id}>
                        <img src={image.imageUrl}/>
                    </li>
                ))}
            </div>
        </div>
    )
}


export default CollectionDetail;
