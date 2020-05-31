import { getTime, isValid } from 'date-fns';
function filterByDateSelector(state, { startDate, endDate }) {
  console.log(getTime(startDate));
  return [];
}
export default filterByDateSelector;
