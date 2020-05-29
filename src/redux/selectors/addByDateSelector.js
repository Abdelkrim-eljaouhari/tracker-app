function addByDateSelector(state, newState) {
  let isElementFound = state.some((item) => item.date === newState.date);
  console.log(isElementFound);
  if (isElementFound) {
    return state.map((item) => {
      if (item.date === newState.date) return newState;
      return item;
    });
  }
  return [...state].concat(newState).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export default addByDateSelector;
