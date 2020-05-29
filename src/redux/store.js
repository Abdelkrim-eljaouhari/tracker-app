import { createStore } from 'redux';
import reduceFunc from './reducers/reduceFunc';
export default createStore(
  reduceFunc,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
