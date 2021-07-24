$(document).ready(function(){

var currentDate = moment().format("dddd, MMMM Do, YYYY");
var currentHour = moment().hour(); // Number
var timeBlocks = $(".description");

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

// save block saves the task and persists through refresh
$(".saveBtn").click(function () {
  var siblings = $(this).siblings(".tasks").val();
  var save = $(this).siblings(".tasks").attr("id");
  localStorage.setItem("h" + save, siblings);
});
$("#hour9 .tasks").val(localStorage.getItem("h9"));
$("#hour10 .tasks").val(localStorage.getItem("h10"));
$("#hour11 .tasks").val(localStorage.getItem("h11"));
$("#hour12 .tasks").val(localStorage.getItem("h12"));
$("#hour13 .tasks").val(localStorage.getItem("h13"));
$("#hour14 .tasks").val(localStorage.getItem("h14"));
$("#hour15 .tasks").val(localStorage.getItem("h15"));
$("#hour16 .tasks").val(localStorage.getItem("h16"));
$("#hour17 .tasks").val(localStorage.getItem("h17"));

// show current date Day written, Month, Day
currentDay.innerHTML = currentDate;
});
