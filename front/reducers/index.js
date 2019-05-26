import {combineReducers} from 'redux';
import user from './user';
import post from './user';

const rootReducer = combineReducers({
  user,
  post
});

export default rootReducer;