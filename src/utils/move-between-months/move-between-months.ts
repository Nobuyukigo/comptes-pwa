type Value = 1 | -1;

const moveBetweenMonths = (selectedMonth: string, value: Value) => {
  const oldMonth = parseInt(selectedMonth.slice(5, 7));
  const oldYear = parseInt(selectedMonth.slice(0, 4));

  if (value === -1 && oldMonth === 1) {
    return `${oldYear - 1}-12`;
  } else if (value === 1 && oldMonth === 12) {
    return `${oldYear + 1}-01`;
  } else {
    const newMonth =
      oldMonth + value < 10 ? `0${oldMonth + value}` : oldMonth + value;
    return `${oldYear}-${newMonth}`;
  }
};

export default moveBetweenMonths;
