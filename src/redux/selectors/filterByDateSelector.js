import { getTime } from 'date-fns';
function filterByDateSelector(state, { startDate, endDate }) {
  console.log(getTime(new Date()));
  console.log(startDate);

  return state;
}
export default filterByDateSelector;
