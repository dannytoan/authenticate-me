import { csrfFetch } from "./csrf";

const LOAD = "photos/LOAD";

// POJO ACTION CREATORS
const load = (gallery) => ({
  type: LOAD,
  gallery,
});

// THUNK ACTION CREATORS
export const getPhotos = () => async (dispatch) => {
  const response = await csrfFetch(`/api/photos`);

  if (response.ok) {
    const gallery = await response.json();
    dispatch(load(gallery));
  }
};

// REDUCER
const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const normalizedPhotos = {};
      action.gallery.forEach((photo) => {
        normalizedPhotos[photo.id] = photo;
      });
      return {
        ...normalizedPhotos,
        ...state,
      };
    default:
      return state;
  }
};

export default photosReducer;
