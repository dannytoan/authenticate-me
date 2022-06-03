import { csrfFetch } from "./csrf";

const LOAD_COM = "photos/LOAD_COM"


// POJO ACTION CREATORS
const load = (comments) => ({
    type: LOAD_COM,
    comments,
});


// THUNK ACTION CREATORS
export const getComments = () => async (dispatch) => {
    // console.log("BEFORE GET COMMENTS THUNK")
    const res = await csrfFetch(`/api/comments`);
    // console.log("AFTER RES IN GET COMMENTS THUNK")

    const comments = await res.json();

    if (res.ok) {
        dispatch(load(comments))
    }

    return comments;
}


// REDUCER
const commentsReducer = (state = {}, action) => {
    const newState = {...state}
    console.log(newState, "NEW STATE")
    switch (action.type) {
        case LOAD_COM:
        const commentsArr = action.comments.comment;
        console.log("COMMENTSARR IN REDUCER", commentsArr)

        commentsArr.forEach((comment) => {
            newState[comment.id] = comment;
        });
        return newState;

    default:
        return state;
    }
}

export default commentsReducer;
