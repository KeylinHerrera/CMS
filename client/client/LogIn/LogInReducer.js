/** Defines the Default State. */
const DEFAULT_STATE = {
  loading: false,
  logIn: false,
  error: '',
};

/** Specifies how the application's state changes in response to actions sent to the store. */
const auths = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ' AUTH_USER_REQUEST':
      return {
        ...state,
        logIn: false,
      };
    case 'AUTH_USER_SUCCESS':
    console.log('prueba', action.message.success)
      return {
        ...state,
        // logIn: true,
        /** Gets Success State*/
        logIn: action.message.success
      };
    case 'AUTH_USER_FAILURE':
      return {
        ...state,
        logIn: false,
        error: action.error,
      };
    default:
      return state;
  }
};

/** Exports the module. */
export default auths;