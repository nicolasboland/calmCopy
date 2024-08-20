import moment from 'moment-timezone';

export const isThursday = () => {
  const today = moment().tz('America/New_York');
  return today.isoWeekday() === 4;
};