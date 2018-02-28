/** API URL Constant. */
const API_URL = 'http://localhost:8081/api/v2/pages'

/** Action Types. */
const GET_PAGES_REQUEST = 'GET_PAGES_REQUEST'
const GET_PAGES_SUCCESS = 'GET_PAGES_SUCCESS'
const GET_PAGES_FAILURE = 'GET_PAGES_FAILURE'

/**
 * Action Creator.
 * @returns Get Pages Action.
 */
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

/** Exports modules. */
module.exports = {
  getPages,
};
