import { csrfFetch } from "./csrf";

const LOAD = "photos/LOAD";
const ADD_LOOK = "photos/ADD_LOOK";
const DELETE = "photos/DELETE"

// POJO ACTION CREATORS
const load = (gallery) => ({
  type: LOAD,
  gallery,
});

const addOneLook = (look) => {
  // console.log("===== HIT POJO ACTION =====");
  return {
    type: ADD_LOOK,
    look,
  };
};

const deleting = (id) => ({
  type: DELETE,
  id
})

// THUNK ACTION CREATORS
export const getPhotos = () => async (dispatch) => {
  const response = await csrfFetch(`/api/photos`);

  if (response.ok) {
    const gallery = await response.json();
    dispatch(load(gallery));
  }
};

export const createLook = (payload) => async (dispatch) => {

  const { id, userId, collectionId, imageUrl, description } = payload;
  const formData = new FormData();

  console.log("IMAGE IN THUNK", imageUrl)

  if (imageUrl) formData.append("imageUrl", imageUrl);
  formData.append("id", id);
  formData.append("userId", userId);
  formData.append("collectionId", collectionId);
  formData.append("description", description);

  console.log("PAYLOAD", payload)
  console.log("FORM DATA", formData)
  console.log("ID", id)
  console.log("description", description)

  const res = await csrfFetch(`/api/photos/new`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const look = await res.json();


  if (look) {
    dispatch(addOneLook(look));
  }

  return look;
};

export const getPhotoDetail = (id) => async (dispatch) => {

  const res = await csrfFetch(`/api/photos/${id}`)

  const look = await res.json();

  if (look) {
    dispatch(addOneLook(look))
  }

  return look
}

export const editPhotoDetail = (id, payload) => async (dispatch) => {

  // console.log("===INSIDE BEFORE RES IN EDIT PHOTO DETAIL THUNK===")

  const res = await csrfFetch(`/api/photos/${id}`, {
    method: 'PUT',
    // headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  // console.log(res, "RES ===INSIDE EDIT PHOTO DETAIL THUNK===")

  const look = await res.json();

  if (look) {
    dispatch(addOneLook(look))
  }

  return look;
};

export const deleteLook = (selectId) => async dispatch => {
  const response = await csrfFetch(`/api/photos/${selectId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(deleting(selectId));
  }
  return response;
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
    case ADD_LOOK:
      const newState = {...state, [action.look.id]: action.look };
      return newState;
    case DELETE:
      const updatedState = { ...state };
      return updatedState;
    default:
      return state;
  }
};

export default photosReducer;
