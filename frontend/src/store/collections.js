import { csrfFetch } from "./csrf";

const LOAD_COL = "collections/LOAD_COL";
const ADD_COL = "collections/ADD_COL";
const DEL_COL = "collections/DEL_COL";

// POJO ACTION CREATORS
const loadCollections = (collection) => ({
  type: LOAD_COL,
  collection,
});

const addCollection = (collection) => ({
  type: ADD_COL,
  collection,
});

const deleteCollection = (id) => ({
  type: DEL_COL,
  id
});

// THUNK ACTION CREATORS
export const getCollections = () => async (dispatch) => {
  const response = await csrfFetch("/api/collections");
  // console.log("INSIDE THE GET COLLECTIONS THUNK");
  // console.log("RESPONSE", response);
  const collections = await response.json();

  if (response.ok) {
    dispatch(loadCollections(collections));
  }

  return collections;
};

export const getCollectionDetail = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/collections/${id}`);

  const collection = await res.json();

  if (collection) {
    dispatch(addCollection(collection));
  }

  return collection;
};

export const createCollection = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/collections`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const collection = await res.json();

  if (collection) {
    dispatch(addCollection(collection));
  }

  return collection;
};

export const deleteSelectedCollection = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/collections/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteCollection(id));
  }

  return response;
};

// REDUCER
const collectionsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_COL:
      const normalizedCollections = {};
      action.collection.collections.forEach((collection) => {
        normalizedCollections[collection.id] = collection;
      });
      return {
        ...state,
        ...normalizedCollections,
      };
    case ADD_COL:
      const newState = { ...state, [action.collection.id]: action.collection };
      return newState;
    case DEL_COL:
      const updatedState = { ...state };
      return updatedState;
    default:
      return state;
  }
};

export default collectionsReducer;
