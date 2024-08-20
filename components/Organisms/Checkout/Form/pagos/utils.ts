export const formatMonth = (month: number): string => {
  const monthAddOne: string = (month + 1).toString();

  const monthTwoDigits: string =
    monthAddOne.length === 1 ? "0" + monthAddOne : monthAddOne;

  return monthTwoDigits;
};

export const formatYear = (year: number): string => {
  const numberToString: string = year.toString();
  return numberToString.slice(2, 4);
};
