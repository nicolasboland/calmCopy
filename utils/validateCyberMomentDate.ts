import moment from 'moment-timezone';

const now = moment().tz("America/Argentina")
const startPreCyber = moment("2023-11-01 00:00:00").tz("America/Argentina");

const endPreCyber = moment("2023-11-05 23:59:59").tz("America/Argentina");

const startCyber = moment("2023-11-06 00:00:00").tz("America/Argentina");

const endCyber = moment("2023-11-13 23:59:59").tz("America/Argentina");

export const isPreCyberMoment = () => {
    return now >= startPreCyber && now <= endPreCyber
}

export const isCyberMoment = () => {
    return now >= startCyber && now <= endCyber
}