/** Defines the Default State. */
const DEFAULT_STATE = {
  loading: false,
  users: [],
  error: '',
};

/** Specifies how the application's state changes in response to actions sent to the store. */
const users = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case 'GET_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'ADD_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: [...state.users, action.user],
      };
    case 'ADD_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

/** Exports the module. */
export default users;
