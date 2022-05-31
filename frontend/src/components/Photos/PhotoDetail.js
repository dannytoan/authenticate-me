import { useEffect } from 'react';
import { getPhotos } from "../../store/photos";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getPhotoDetail } from '../../store/photos';

import "./PhotoDetail.css"

const PhotoDetail = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;

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
            <div id="photo-detail-container">
            <h1 id="photo-title">{selectPhoto?.description}</h1>
            <img id="selected-photo" src={selectPhoto?.imageUrl}></img>
            </div>
        </div>
    )
}


export default PhotoDetail;
