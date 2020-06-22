import searchReducer from './searchReducer';
import authReducer from './authReducer';
import resultsReducer from './resultsReducer';
import {
  combineReducers
} from 'redux';

const rootReducer = combineReducers({searchReducer, authReducer, resultsReducer});


export default rootReducer;