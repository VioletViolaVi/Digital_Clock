document.addEventListener("DOMContentLoaded", function () {
  // Write a JavaScript program to display the current day and time in the following format
  let todaysFullDate = new Date(); // gets today's day, date & time
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; // gets textual day of the week
  let emptyDay = document.getElementById("day"); // gets span w/ id="day"
  let emptyTime = document.getElementById("time"); // gets span w/ id="time"

  /* gets NUMBER for indexing weekdays */
  function getDayIndexNum() {
    let dayNumForToday = todaysFullDate.getDay();
    let today = daysOfTheWeek[dayNumForToday];
    emptyDay.append(today);
  }
  getDayIndexNum();

  /* gets NUMBERS for current hour(s) and minute(s) */
  function getTimeNums() {
    let hours = todaysFullDate.getHours();
    let minutes = todaysFullDate.getMinutes();
    let todaysTime = hours + ":" + minutes;
    emptyTime.append(todaysTime);
  }
  getTimeNums();
});
