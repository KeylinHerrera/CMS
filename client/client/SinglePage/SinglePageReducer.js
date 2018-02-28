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
    case 'ADD_PAGE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        pages: [...state.pages, action.page],
      };
    case 'ADD_PAGE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case 'DELETE_PAGE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_PAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        pages: state.pages.filter((item) => {
          return item._id !== action._id;
        }),
      };
    case 'DELETE_PAGE_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'UPDATE_PAGE_REQUEST': 
    return {
      ...state,
      loading: true,
    };
    case 'UPDATE_PAGE_SUCCESS': 
    return {
      ...state,
      loading: false,
      pages: state.pages.map((item) => {
        if (item._id === action._id) {
          // item.done = true;
          console.log('atun')
          item.title = action.title;
          item.url = action.url;
          item.content = action.content;
        }
        return item;
      }),
    };
    case 'UPDATE_PAGE_FAILURE':
    return {
      ...state,
      error: action.error,
    };
    
    default:
      return state;
  }
};

/** Exports the module. */
export default pages;
