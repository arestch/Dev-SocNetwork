import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  GET_POST
} from "./types";

// Add post
// Returning a promise
export const addPost = postData => dispatch => {
  dispatch(getPosts);
  return axios
    .post("/api/posts", postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
      return res;
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      throw err;
    });
};

// Delete post
export const deletePost = id => dispatch => {
  dispatch(getPosts);
  axios
    .delete(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add like
export const addLike = id => dispatch => {
  dispatch(getPosts);
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all posts
export const getPost = id => dispatch => {
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Get all posts
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
