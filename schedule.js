// step 1: put current date using moment()
// step 2: comapre the current hour with time-blocks
// step 3: use the cs classes for present, past, or future compare to the time-blocks with moment() 
    // if moment() > time-blocks => past
    // if moment() == time-blocks => present
    // if moment() < time-blocks => future

// step 4: grab textarea value and stoer it in localstorage

var timeBlocksArr=[9,10,11,12,13,14,15,16,17];

var currentHour = moment().hour();
var currentDay = $("#currentDay");
console.log(currentHour);

var systemTime = moment().format("dddd, MMMM Do");
currentDay.text(systemTime);
console.log(systemTime)

function displayTimeBlockColors() {
    for(var i=0; i < timeBlocksArr.length; i++){
        var currentTextEl = $("#" +timeBlocksArr[i]);

        if(currentHour>timeBlocksArr[i]) {
            
        }
    }
}