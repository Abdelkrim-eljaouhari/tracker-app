export function addWeight(weight) {
  return { type: 'ADD_WERIGHT', weight };
}

export function ModifyTodayWeight(weight) {
  return {
    type: 'MODIFY_TODAY_WEIGHT',
    weight,
  };
}
