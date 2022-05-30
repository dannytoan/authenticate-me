import { csrfFetch } from "./csrf";

const LOAD = "photos/LOAD";
const ADD_LOOK = "photos/ADD_LOOK"

// POJO ACTION CREATORS
const load = (gallery) => ({
  type: LOAD,
  gallery,
});

const addOneLook = look => ({
  type: ADD_LOOK,
  look
})

// THUNK ACTION CREATORS
export const getPhotos = () => async (dispatch) => {
  const response = await csrfFetch(`/api/photos`);

  if (response.ok) {
    const gallery = await response.json();
    dispatch(load(gallery));
  }
};


export const createLook = (payload) => async(dispatch) => {
  const res = await csrfFetch(`/api/photos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const look = await res.json();
    dispatch(addOneLook(look))
  }
}

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
    case ADD_LOOK:
      return {
        ...state,
        entries: { ...state.entries, [action.article.id]: action.article}
      };
    default:
      return state;
  }
};

export default photosReducer;
