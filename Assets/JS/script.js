var currentDate = moment().format("dddd, MMMM Do, YYYY");
var currentHour = moment().hour(); // Number
var timeBlocks = $(".description");

// Center the header and add a line to show current date Day written, Month, Day

// Need blocks for hours between 9AM - 5 PM (3 columns: 1 for the time, 1 for task adding, 1 for saving down)

// task adding block should be click into able for adding task

// save block saves the task and persists through refresh

//current hour turns block red, future hours are green and past hours gray out
for (let i = 0; i < timeBlocks.length; i++) {
    
  if (currentHour === +$(timeBlocks[i]).attr("id")) {
    $(timeBlocks[i]).addClass("present");
  } else if (currentHour > +$(timeBlocks[i]).attr("id")) {
    $(timeBlocks[i]).addClass("past");
  } else {
    $(timeBlocks[i]).addClass("future");
  }
}

console.log(currentHour);
// show current date Day written, Month, Day
currentDay.innerHTML = currentDate;

$(".saveBtn").click(function(){
    console.log($(this));
})

//val()