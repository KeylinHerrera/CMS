/** API URL Constant. */
const API_URL = 'http://localhost:8081/api/v2/logIns';

/** Action Types. */
const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

/**
 * Action Authenticate.
 * @returns Authenticate User Action.
 */
const authUsers = () => (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });
  fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        users: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USERS_FAILURE,
        error,
      });
    });
};

/** Exports modules. */
module.exports = {
  authUsers,
};
