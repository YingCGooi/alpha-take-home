const { createStore, combineReducers } = window.Redux;

const store = createStore(
  combineReducers({
    search
  }),
)