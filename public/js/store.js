import search from './reducers/searchReducer';
import { createStore, combineReducers } from 'redux';

console.log(search);

export default createStore(
  combineReducers({
    search
  }),
)