//--------- Importing required libararies ---------------
import { MONTHS, DAYS } from './DateConstants';


const date = new Date();
//--------------- Finding days function -------------------//
export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

//----------------- Finding Months Finction ---------------//
export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

//---------------- Finding data Fnction -------------------//
export function transformDateFormat() {
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

//--------------- finding Date function -----------------//
export function getUTCDatetime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });

  const isoDateString = new Date().toISOString();
  const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
  return utcDate;
}

//------------- UTC Time function ---------------//
export function getUTCTime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });

  return utcTime;
}