import axios from "axios";

import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING } from "./types";

// Add post
export const addPost = postData => dispatch => {
  dispatch(getPosts);
  axios
    .post("/api/posts", postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getPosts = () => dispatch => {
  axios
    .get("/api/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: {}
      })
    );
};

// Set Loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
