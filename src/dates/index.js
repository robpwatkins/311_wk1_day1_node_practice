const moment = require('moment');

const today = () => {
 return moment().format('dddd');
  
}

const calendar = () => {
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {
  return moment().format('HH:MM:SS A');
}

module.exports = {
  today,
  calendar,
  currentTime
}