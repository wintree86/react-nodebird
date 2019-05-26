import {all, call} from 'redux-sage/effects';
import user from './user';
import post from './post';

export default funtion* rootSage() {
  yield all([
    call(user),
    call(post)
  ]);
};