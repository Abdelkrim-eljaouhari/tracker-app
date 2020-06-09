import addByDateSelector from '../selectors/addByDateSelector';
import dummyData from '../../data/dummyData';
function reduceFunc(state = { weights: dummyData }, action) {
  switch (action.type) {
    case 'ADD_WERIGHT':
      return { weights: [...state.weights].concat(action.componentState) };
    case 'MODIFY_TODAY_WEIGHT':
      return addByDateSelector(
        { weights: [...state.weights] },
        action.componentState
      );
    case 'ADD_WEIGHT_BY_DATE':
      return addByDateSelector(
        { weights: [...state.weights] },
        action.componentState
      );
    case 'FIlTER_BY_DATE':
      return {
        weights: [...state.weights],
        startDate: action.componentState.startDate,
        endDate: action.componentState.endDate,
        showAll: action.componentState.showAll,
      };
    case 'SHOW_ALL':
      return {
        weights: [...state.weights],
      };
    default:
      return state;
  }
}
export default reduceFunc;
