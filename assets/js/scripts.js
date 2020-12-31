document.addEventListener("DOMContentLoaded", function () {
  let todaysFullDate = new Date(); // gets today's day, date & time

  let hours = todaysFullDate.getHours(); // gets num for hours
  let minutes = todaysFullDate.getMinutes(); // gets num for minutes

  let emptyTime = document.getElementById("time"); // gets id="time"
  let emptyMonth = document.getElementById("month"); // gets id="month"
  let emptyMonthDate = document.getElementById("monthDate"); // gets id="monthDate"
  let emptyDay = document.getElementById("weekday"); // gets id="weekday"

  // textual months
  let monthsOfTheYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // textual days
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  /* gets NUMBER for INDEXING month array */
  function getMonthIndexNum() {
    let monthNumToday = todaysFullDate.getMonth();
    let monthToday = monthsOfTheYear[monthNumToday];
    emptyMonth.append(monthToday);
  }
  getMonthIndexNum();

  /* gets NUMBER for month date */
  function getMonthDateNum() {
    let monthDateNumToday = todaysFullDate.getDate();
    emptyMonthDate.append(monthDateNumToday);
  }
  getMonthDateNum();

  /* gets NUMBER for INDEXING weekday array */
  function getDayIndexNum() {
    let dayNumForToday = todaysFullDate.getDay();
    let today = daysOfTheWeek[dayNumForToday];
    emptyDay.append(today);
  }
  getDayIndexNum();

  /* assembles hour and minute numbers together */
  function getTimeNums() {
    addZeroToSingleHours();
    addZeroToSingleMinutes();
    let todaysTime = hours + ":" + minutes;
    emptyTime.append(todaysTime);
  }
  getTimeNums();

  /* adds 0 in front for hour nums 1-9 */
  function addZeroToSingleHours() {
    if (hours >= 0 && hours < 10) {
      hours = "0" + hours;
    }
  }

  /* adds 0 in front for minute nums 1-9 */
  function addZeroToSingleMinutes() {
    if (minutes >= 0 && minutes < 10) {
      minutes = "0" + minutes;
    }
  }
});
