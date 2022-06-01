import { csrfFetch } from "./csrf";

const LOAD_COL = "collections/LOAD_COL";

// POJO ACTION CREATORS
const loadCollections = (collection) => ({
  type: LOAD_COL,
  collection,
});

// THUNK ACTION CREATORS
export const getCollections = () => async (dispatch) => {
    const response = await csrfFetch("/api/collections");
    console.log("INSIDE THE GET COLLECTIONS THUNK")
    console.log("RESPONSE", response)
  const collections = await response.json();

  if (response.ok) {
    dispatch(loadCollections(collections));
  }

  return collections;
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
        ...normalizedCollections,
        ...state,
      };
    default:
      return state;
  }
};


export default collectionsReducer;
