import addByDateSelector from '../selectors/addByDateSelector';
import filterByDateSelector from '../selectors/filterByDateSelector';
function reduceFunc(state = [], action) {
  switch (action.type) {
    case 'ADD_WERIGHT':
      return state.concat(action.weight);
    case 'MODIFY_TODAY_WEIGHT':
      return addByDateSelector([...state], action.weight);
    case 'ADD_WEIGHT_BY_DATE':
      return addByDateSelector([...state], action.weight);
    case 'FIlter_BY_DATE':
      return filterByDateSelector([...state], action.weight);
    default:
      return state;
  }
}
export default reduceFunc;
