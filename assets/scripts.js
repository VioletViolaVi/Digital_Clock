document.addEventListener("DOMContentLoaded", function() { 
    
    // Write a JavaScript program to display the current day and time in the following format
   
    /* gets textual day of the week */
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let emptyDay = document.getElementById("day");

    /* gets NUMBER for indexing weekday */
    function getDay() {
        let dayNumForToday = new Date().getDay();
        let today = daysOfTheWeek[dayNumForToday];
        emptyDay.append(today);
    }
    getDay();



























  });