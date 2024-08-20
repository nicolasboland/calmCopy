import moment from 'moment-timezone';

const now = moment().tz("America/Buenos_Aires")

const startBlackWeek = moment("2023-11-25 00:00:00").tz("America/Buenos_Aires");
const endBlackWeek = moment("2023-12-12 23:59:59").tz("America/Buenos_Aires");
const startNavidad = moment("2023-12-13 00:00:00").tz("America/Buenos_Aires");
const endNavidad = moment("2023-12-25 23:59:59").tz("America/Buenos_Aires");
let startCapicua = moment("").tz("America/Buenos_Aires");
let endCapicua = moment("").tz("America/Buenos_Aires");

const DateRange = (year: number, month: number, day: number) => {
  startCapicua = moment(`${year}-${month}-${day} 00:00:00`).tz("America/Buenos_Aires");
  endCapicua = moment(`${year}-${month}-${day} 23:59:59`).tz("America/Buenos_Aires");
};

const dates: string[] = ["01/01", "02/02", "03/03", "04/04", "05/05", "06/06", "07/07", "08/08", "09/09", "10/10", "11/11", "12/12"];

const isCapicuaDate = dates.some(date => {
  const [month, day]: number[] = date.split('/').map(Number);
  return now.month() + 1 === month && now.date() === day;
});

if (isCapicuaDate) {
  DateRange(now.year(), now.month() + 1, now.date());
}

export const isCapicua = () => process.env.NEXT_PUBLIC_NEXT_PROMO != "true" && (now >= startCapicua && now <= endCapicua)

export const isBlackWeek = () => (now >= startBlackWeek && now <= endBlackWeek)

export const isNavidad = () => process.env.NEXT_PUBLIC_NEXT_PROMO == "true" || (now >= startNavidad && now <= endNavidad)