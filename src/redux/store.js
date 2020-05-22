import { createStore } from 'redux';
function reduceFunc(state = [], action) {
  switch (action.type) {
    case 'ADD_WERIGHT':
      return state.concat(action.weight);
    case 'MODIFY_TODAY_WEIGHT':
      let newState = [...state].map((item) => {
        if (item.date === action.weight.date) {
          console.log('yep');
          return action.weight;
        } else {
          return item;
        }
      });
      return newState;

    default:
      return state;
  }
}

export default createStore(
  reduceFunc,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
