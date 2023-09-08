const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentUTCTime = document.body.querySelector('[data-testid="currentUTCTime"]')
let currentDayOfTheWeek = document.body.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentDate = new Date()

let day = weekday[currentDate.getUTCDay()];




// const currentDay = currentDate.getUTCDay()
const currentHour = currentDate.getUTCHours()
const currentMinutes = currentDate.getUTCMilliseconds()

document.body.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = day;
document.body.querySelector('[data-testid="currentUTCTime"]').innerHTML = `(UTC Time: ${currentMinutes})` + ' ' + ' in milliseconds';