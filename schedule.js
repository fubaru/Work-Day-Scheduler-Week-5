// step 1: put current date using moment()
// step 2: comapre the current hour with time-blocks
// step 3: convert time blocks to military time
// step 4: use the cs classes for present, past, or future compare to the time-blocks with moment() 
    // if moment() > time-blocks => past
    // if moment() == time-blocks => present
    // if moment() < time-blocks => future

// step 5: grab textarea value and stoer it in localstorage

// converting time blocks to military time and defined the variable with array
var timeBlocksArr=[9,10,11,12,13,14,15,16,17];

// define current hour variable to us in a for loop
var currentHour = moment().hour();
// grabbing static selector to use to display currnet time using moment()
var currentDay = $("#currentDay");
console.log(currentHour);

// defining systemTime variable with current time using moment()
var systemTime = moment().format("dddd, MMMM Do");
// make current time display on HTMl page
currentDay.text(systemTime);
console.log(systemTime);

// creating the step 4 functions for past, present, and future timeblocks
function displayTimeBlockColors() {
    for(var i=0; i < timeBlocksArr.length; i++){
        var currentTextEl = $("#" +timeBlocksArr[i]);

        if(currentHour>timeBlocksArr[i]) {
            
        }
    }
};