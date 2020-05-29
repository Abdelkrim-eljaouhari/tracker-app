export function addWeight(weight) {
  return { type: 'ADD_WERIGHT', weight };
}

export function ModifyTodayWeight(weight) {
  return {
    type: 'MODIFY_TODAY_WEIGHT',
    weight,
  };
}

export function addWeigthByDate(weight) {
  return {
    type: 'ADD_WEIGHT_BY_DATE',
    weight,
  };
}
