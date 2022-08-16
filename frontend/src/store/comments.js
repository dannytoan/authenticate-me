import { csrfFetch } from "./csrf";

const LOAD_COM = "comments/LOAD_COM";
const NEW_COM = "comments/NEW_COM";

// POJO ACTION CREATORS
const load = (comments) => ({
  type: LOAD_COM,
  comments,
});

const create = (comment) => ({
  type: NEW_COM,
  comment,
});

// THUNK ACTION CREATORS
export const getComments = () => async (dispatch) => {
  const res = await csrfFetch(`/api/comments`);

  const comments = await res.json();

  if (res.ok) {
    dispatch(load(comments));
  }

  return comments;
};

export const createComment = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/new`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const comment = await res.json();

  if (res.ok) {
    dispatch(create(comment));
  }
};

// REDUCER
const commentsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_COM:
      const commentsArr = action.comments.comment;
      commentsArr.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case NEW_COM:
      const newComState = { ...state, [action.comment.id]: action.comment };
      return newComState;

    default:
      return state;
  }
};

export default commentsReducer;
