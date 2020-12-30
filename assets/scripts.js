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

  let x = 20;
  x += 5;
  console.log(x);

  let y = 10;
  y %= 3;
  console.log(y);

  let a;
  console.log("This is undefined: " + a);

  let favFood = "pizza";
  let favColour = "pink";
  let favDrink = "cola";
  let drinkNum = 5;

  console.log(
    "I like to eat " +
      favFood +
      " and drink " +
      drinkNum +
      " bottles of " +
      favDrink +
      " whilst wearing a " +
      favColour +
      " bib."
  );

  console.log(
    `I like to eat ${favFood} and drink ${drinkNum} bottles of ${favDrink} whilst wearing a ${favColour} bib.`
  );
});
