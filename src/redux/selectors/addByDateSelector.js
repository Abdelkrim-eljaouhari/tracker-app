function addByDateSelector(state, newState) {
  let isElementFound = state.weights.some(
    (item) => item.date === newState.date
  );
  if (isElementFound) {
    return {
      weights: state.weights.map((item) => {
        if (item.date === newState.date) return newState;
        return item;
      }),
    };
  }
  return {
    weights: [...state.weights].concat(newState).sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }),
  };
}

export default addByDateSelector;
