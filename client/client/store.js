// Imports Frameworks
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

// Imports Modules
import SetUpReducer from './SetUp/SetUpReducer';
import SinglePageReducer from './SinglePage/SinglePageReducer';

// Creates Logger
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const reducer = combineReducers({
  SetUp: SetUpReducer,
  SinglePage: SinglePageReducer,
 });

// Creates Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

export default store;
