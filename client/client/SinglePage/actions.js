// Imports Frameworks
import uuid from 'uuid/v1';

// API URL Constant
const API_URL = 'http://localhost:8081/api/v2/pages'

const ADD_PAGE_REQUEST = 'ADD_PAGE_REQUEST'
const ADD_PAGE_SUCCESS = 'ADD_PAGE_SUCCESS'
const ADD_PAGE_FAILURE = 'ADD_PAGE_FAILURE'

const GET_PAGES_REQUEST = 'GET_PAGES_REQUEST'
const GET_PAGES_SUCCESS = 'GET_PAGES_SUCCESS'
const GET_PAGES_FAILURE = 'GET_PAGES_FAILURE'

const DELETE_PAGE_REQUEST = 'DELETE_PAGE_REQUEST'
const DELETE_PAGE_SUCCESS = 'DELETE_PAGE_SUCCESS'
const DELETE_PAGE_FAILURE = 'DELETE_PAGE_FAILURE'

// update
// get data page

const addNewPage = page => (dispatch) => {
  dispatch({
    type: ADD_PAGE_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: uuid(),
      ...page,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_PAGE_SUCCESS,
        page: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_PAGE_FAILURE,
        error,
      });
    });
};

const getPages = () => {
  return function (dispatch) {
    dispatch({
      type: GET_PAGES_REQUEST,
    });
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_PAGES_SUCCESS,
          pages: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGES_FAILURE,
          error,
        });
      });
  };
};

const deletePage = id => (dispatch) => {
  dispatch({
    type: DELETE_PAGE_REQUEST,
    id,
  });
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: DELETE_PAGE_SUCCESS,
        id,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PAGE_FAILURE,
        error,
      });
    });
};

module.exports = {
  addNewPage,
  getPages,
  deletePage,
};
