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
var standardTime = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
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

var saveBtn = $(".saveBtn")

// creating the step 4 functions for past, present, and future timeblocks
function displayTimeBlockColors() {
    for(var i=0; i < timeBlocksArr.length; i++){
        var currentTextEl = $("#" +timeBlocksArr[i]);

        if(currentHour>timeBlocksArr[i]) {
            currentTextEl.addClass("past");
        } else if (currentHour == timeBlocksArr[i]) {
            currentTextEl.addClass("present");
        } else {
            currentTextEl.addClass("future")
        }

        // get stored items in local storage back onto the page
        var event = localStorage.getItem(standardTime[i]);
        if (event) {
            $('#'+timeBlocksArr[i]).val(event)
        }
    }
};

// Store text input in local storage after clicking on saveBtn
saveBtn.on("click", function(){

    var hour = $(this).siblings(".hour").text()
    var input = $(this).siblings(".desc").val()

    localStorage.setItem(hour,input);
    displayTimeBlockColors();
})




displayTimeBlockColors();
