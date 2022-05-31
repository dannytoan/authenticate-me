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

    console.log(photo, "PHOTO")

    useEffect(() => {
        dispatch(getPhotoDetail(id));
        console.log("INSIDE THE USE EFFECT")
    }, [dispatch, id])

    return (
        <div>
            hiiiiiiiiiiiiiiii this is photo detail!!!!
        </div>
    )
}


export default PhotoDetail;
