/** Imports Framework. */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

/** Imports Modules. */
import SetUpReducer from './SetUp/SetUpReducer';
import SinglePageReducer from './SinglePage/SinglePageReducer';
// import ContentReducer from './Content/ContentReducer';
// import MediaReducer from './Media/MediaReducer';

/** Creates Logger. */
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

/** Gets the previous state and action and returns a new state. */
const reducer = combineReducers({
  SetUp: SetUpReducer,
  SinglePage: SinglePageReducer,
  // Content: ContentReducer,
  // Media: MediaReducer,
 });

/** Contains the state of the application. */
const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

/** Exports Store. */
export default store;
