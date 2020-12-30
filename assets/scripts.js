document.addEventListener("DOMContentLoaded", function() { 
    
    // Write a JavaScript program to display the current day and time in the following format
    
    let todaysFullDate = new Date();   
    /* gets textual day of the week */
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let emptyDay = document.getElementById("day");
    let emptyTime = document.getElementById("time"); 

    /* gets NUMBER for indexing weekdays */
    function getDayNum() {
        let dayNumForToday = todaysFullDate.getDay();
        let today = daysOfTheWeek[dayNumForToday];
        emptyDay.append(today);
    }
    getDayNum();
    
    /* gets NUMBERS for current hour(s) and minute(s) */
    function getTimeNums() {
        let hours = todaysFullDate.getHours();
        let minutes = todaysFullDate.getMinutes();
        let todaysTime = hours + ":" + minutes;        
        emptyTime.append(todaysTime);
    }
    getTimeNums();



























  });