import {all, fork} from 'redux-saga/effects';
import user from './user';
import post from './post';

export default function* rootSage() {
  yield all([
    fork(user),
    fork(post)
  ]);
}