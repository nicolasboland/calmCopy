import moment from 'moment-timezone';

const now = moment().tz("America/Buenos_Aires")
const startCyber = moment("2023-11-05 23:30:00").tz("America/Buenos_Aires");
const endCyber = moment("2023-11-08 23:59:59").tz("America/Buenos_Aires");
const startCyberWeek = moment("2023-11-09 00:00:00").tz("America/Buenos_Aires");
const endCyberWeek = moment("2023-11-13 23:59:59").tz("America/Buenos_Aires");

export const isCyber = () => process.env.NEXT_PUBLIC_CYBER_MODE == "true" || (now >= startCyber && now <= endCyber)

export const isCyberWeek = () => now >= startCyberWeek && now <= endCyberWeek