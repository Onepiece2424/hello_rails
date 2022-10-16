import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';

import {UsersReducer} from '../users/reducers';

export default function createStore() {
  return reduxCreateStore( // オリジナル createStore の別名
        combineReducers({
            users: UsersReducer
        })
    );
}
