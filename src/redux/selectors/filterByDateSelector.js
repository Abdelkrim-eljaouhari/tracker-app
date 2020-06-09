function filterByDateSelector(state, startDate, endDate) {
  let startTimestamp = new Date(startDate).getTime();
  let endTimestamp = new Date(endDate).getTime();

  return state.filter((item) => {
    console.log(new Date(item.date).getTime() >= startTimestamp);
    if (
      new Date(item.date).getTime() >= startTimestamp &&
      new Date(item.date).getTime() <= endTimestamp
    ) {
      return item;
    }
  });
}
export default filterByDateSelector;
