import { MONTHS_FULL } from '../constants';

// transform dates like 2018-02, 2017-05 to Février 2018, Mai 2017
const readableMonthAndYear = (date: string) => {
  const month = MONTHS_FULL[parseInt(date.slice(5, 7)) - 1];
  const year = date.slice(0, 4);

  return `${month} ${year}`;
};

export default readableMonthAndYear;
