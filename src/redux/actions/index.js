export function addWeight(componentState) {
  return { type: 'ADD_WERIGHT', componentState };
}

export function ModifyTodayWeight(componentState) {
  return {
    type: 'MODIFY_TODAY_WEIGHT',
    componentState,
  };
}

export function addWeigthByDate(componentState) {
  return {
    type: 'ADD_WEIGHT_BY_DATE',
    componentState,
  };
}

export function filterByDate(componentState) {
  return {
    type: 'FIlTER_BY_DATE',
    componentState,
  };
}

export function showAll(componentState) {
  return {
    type: 'SHOW_ALL',
    componentState,
  };
}
