/** Defines the Default State. */
const DEFAULT_STATE = {
    loading: false,
    pages: [],
    error: '',
  };
  
  /** Specifies how the application's state changes in response to actions sent to the store. */
  const pages = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case 'GET_PAGES_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_PAGES_SUCCESS':
        return {
          ...state,
          loading: false,
          pages: action.pages,
        };
      case 'GET_PAGES_FAILURE':
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
  export default pages;
  