document.addEventListener("DOMContentLoaded", function () {
  // Write a JavaScript program to display the current day and time.

  let todaysFullDate = new Date(); // gets today's day, date & time
  let hours = todaysFullDate.getHours(); // gets num for hours
  let minutes = todaysFullDate.getMinutes(); // gets num for minutes
  // gets textual day of the week
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let emptyDay = document.getElementById("day"); // gets span w/ id="day"
  let emptyTime = document.getElementById("time"); // gets span w/ id="time"

  /* gets NUMBER for indexing weekday array */
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
