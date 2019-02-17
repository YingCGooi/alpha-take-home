import search from './reducers/searchReducer';
import { createStore, combineReducers } from 'redux';

export default createStore(
  combineReducers({
    search
  }),
)