/** Defines the Default State. */
const DEFAULT_STATE = {
  loading: false,
  contents: [],
  error: '',
};

/** Specifies how the application's state changes in response to actions sent to the store. */
const contents = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_CONTENTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CONTENTS_SUCCESS':
      return {
        ...state,
        loading: false,
        contents: action.contents,
      };
    case 'GET_CONTENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'ADD_CONTENT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_CONTENT_SUCCESS':
      return {
        ...state,
        loading: false,
        contents: [...state.contents, action.content],
      };
    case 'ADD_CONTENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case 'DELETE_CONTENT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_CONTENT_SUCCESS':
      return {
        ...state,
        loading: false,
        contents: state.contents.filter((item) => {
          return item._id !== action._id;
        }),
      };
    case 'DELETE_CONTENT_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'UPDATE_CONTENT_REQUEST': 
    return {
      ...state,
      loading: true,
    };
    case 'UPDATE_CONTENT_SUCCESS': 
    return {
      ...state,
      loading: false,
      contents: state.contents.map((item) => {
        if (item._id === action._id) {
          // item.done = true;
          console.log('atun')
          item.title = action.title;
          item.url = action.url;
          item.text = action.text;
        }
        return item;
      }),
    };
    case 'UPDATE_CONTENT_FAILURE':
    return {
      ...state,
      error: action.error,
    };
    
    default:
      return state;
  }
};

/** Exports the module. */
export default contents;
