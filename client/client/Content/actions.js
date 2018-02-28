/** API URL Constant. */
const API_URL = 'http://localhost:8081/api/v2/contents'

/** Action Types. */
const ADD_CONTENT_REQUEST = 'ADD_CONTENT_REQUEST'
const ADD_CONTENT_SUCCESS = 'ADD_CONTENT_SUCCESS'
const ADD_CONTENT_FAILURE = 'ADD_CONTENT_FAILURE'

const GET_CONTENTS_REQUEST = 'GET_CONTENTS_REQUEST'
const GET_CONTENTS_SUCCESS = 'GET_CONTENTS_SUCCESS'
const GET_CONTENTS_FAILURE = 'GET_CONTENTS_FAILURE'

const DELETE_CONTENT_REQUEST = 'DELETE_CONTENT_REQUEST'
const DELETE_CONTENT_SUCCESS = 'DELETE_CONTENT_SUCCESS'
const DELETE_CONTENT_FAILURE = 'DELETE_CONTENT_FAILURE'

const UPDATE_CONTENT_REQUEST = 'UPDATE_CONTENT_REQUEST';
const UPDATE_CONTENT_SUCCESS = 'UPDATE_CONTENT_SUCCESS';
const UPDATE_CONTENT_FAILURE = 'UPDATE_CONTENT_FAILURE';

const GET_DATA_CONTENT_REQUEST = 'GET_DATA_CONTENT_REQUEST';
const GET_DATA_CONTENT_SUCCESS = 'GET_DATA_CONTENT_SUCCESS';
const GET_DATA_CONTENT_FAILURE = 'GET_DATA_CONTENT_FAILURE';

/**
 * Action Creator.
 * @returns New Content Action.
 */
const addNewContent = content => (dispatch) => {
  dispatch({
    type: ADD_CONTENT_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...content,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_CONTENT_SUCCESS,
        content: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_CONTENT_FAILURE,
        error,
      });
    });
};


/**
 * Action Creator.
 * @returns Get Contents Action.
 */
const getContents = () => {
  return function (dispatch) {
    dispatch({
      type: GET_CONTENTS_REQUEST,
    });
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_CONTENTS_SUCCESS,
          contents: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CONTENTS_FAILURE,
          error,
        });
      });
  };
};


/**
 * Action Creator.
 * @returns Delete Content Action.
 */
const deleteContent = _id => (dispatch) => {
  dispatch({
    type: DELETE_CONTENT_REQUEST,
  });
  fetch(`${API_URL}/${_id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: DELETE_CONTENT_SUCCESS,
        _id,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_CONTENT_FAILURE,
        error,
      });
    });
};


/**
 * Action Creator.
 * @returns Update Content Action.
 */
const updateContent = content => (dispatch) => {
  dispatch({
    type: UPDATE_CONTENT_REQUEST,
  });
  fetch(`${API_URL}/${content._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...content,
    }),
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: UPDATE_CONTENT_SUCCESS,
        title: content.title,
        url: content.url,
        text: content.text,
        _id: content._id,
      });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_CONTENT_FAILURE,
        error,
      });
    });
};


/**
 * Action Creator.
 * @returns Get Data Content for Details Action.
 */
const getDataContent = content => (dispatch) => {
  dispatch({
    type: GET_DATA_CONTENT_REQUEST,
  });
  fetch(`${API_URL}/${content._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...content,
    }),
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: GET_DATA_CONTENT_SUCCESS,
        _id: content._id,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DATA_CONTENT_FAILURE,
        error,
      });
    });
};

/** Exports modules. */
module.exports = {
  addNewContent,
  getContents,
  deleteContent,
  updateContent,
  getDataContent
};
