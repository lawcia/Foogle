import searchReducer from './searchReducer';
import authReducer from './authReducer';
import {
  combineReducers
} from 'redux';

const rootReducer = combineReducers({searchReducer, authReducer});


export default rootReducer;