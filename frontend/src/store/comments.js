import { csrfFetch } from "./csrf";

const LOAD_COM = "comments/LOAD_COM";
const NEW_COM = "comments/NEW_COM";
const DEL_COM = "comments/DEL_COM";

// POJO ACTION CREATORS
const load = (comments) => ({
  type: LOAD_COM,
  comments,
});

const create = (comment) => ({
  type: NEW_COM,
  comment,
});

const delCom = (id) => ({
  type: DEL_COM,
  id,
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

export const editComment = (id, payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  const comment = await res.json();
  console.log("EDITED COMMENT", comment);
  console.log("PAYLOAD", payload);

  if (comment) {
    dispatch(create(comment));
  }
};

export const deleteComment = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(delCom(id));
  }
  return response;
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
    case DEL_COM:
      const updatedState = { ...state };
      return updatedState;
    default:
      return state;
  }
};

export default commentsReducer;
