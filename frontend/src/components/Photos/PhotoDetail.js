import { useEffect } from 'react';
import { getPhotos } from "../../store/photos";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { getPhotoDetail } from '../../store/photos';

const PhotoDetail = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    // console.log(params, "PARAMS")
    const photo = Object.values(useSelector(state => state.photos));
    const selectPhoto = photo.filter(photo => {return photo.id === +id})[0]


    console.log("PHOTO", photo)
    console.log("SELECT PHOTO", selectPhoto?.imageUrl)

    useEffect(() => {
        dispatch(getPhotoDetail(id));
        // console.log("INSIDE THE USE EFFECT")
        if (photo) {
            return;
        }
    }, [dispatch, id])

    useEffect(() => {

    })

    return (
        <div>
            hiiiiiiiiiiiiiiii this is photo detail!!!!
            <img src={selectPhoto?.imageUrl}></img>
        </div>
    )
}


export default PhotoDetail;