
/*Placing Time On Jumbtron*/
var timeDisplay = document.querySelector("#currentDay");

var time = moment().format('LLLL');

timeDisplay.textContent = time;

var hour = moment().format('H');

/*9AM Styling*/
if (hour == 9) {
    $("#hour-9-text").addClass("present");
} else if (hour > 9) {
    $("#hour-9-text").addClass("past");
} else if (hour < 9) {
    $("#hour-9-text").addClass("future");
}

/*10AM Styling*/
if (hour == 10) {
    $("#hour-10-text").addClass("present");
} else if (hour > 10) {
    $("#hour-10-text").addClass("past");
} else if (hour < 10) {
    $("#hour-10-text").addClass("future");
}

/*11AM Styling*/
if (hour == 11) {
    $("#hour-11-text").addClass("present");
} else if (hour > 11) {
    $("#hour-11-text").addClass("past");
} else if (hour < 11) {
    $("#hour-11-text").addClass("future");
}

/*12PM Styling*/
if (hour == 12) {
    $("#hour-12-text").addClass("present");
} else if (hour > 12) {
    $("#hour-12-text").addClass("past");
} else if (hour < 12) {
    $("#hour-12-text").addClass("future");
}

/*1PM Styling*/
if (hour == 13) {
    $("#hour-1-text").addClass("present");
} else if (hour > 13) {
    $("#hour-1-text").addClass("past");
} else if (hour < 13) {
    $("#hour-1-text").addClass("future");
}

/*2PM Styling*/
if (hour == 14) {
    $("#hour-2-text").addClass("present");
} else if (hour > 14) {
    $("#hour-2-text").addClass("past");
} else if (hour < 14) {
    $("#hour-2-text").addClass("future");
}

/*3PM Styling*/
if (hour == 15) {
    $("#hour-3-text").addClass("present");
} else if (hour > 15) {
    $("#hour-3-text").addClass("past");
} else if (hour < 15) {
    $("#hour-3-text").addClass("future");
}

/*4PM Styling*/
if (hour == 16) {
    $("#hour-4-text").addClass("present");
} else if (hour > 16) {
    $("#hour-4-text").addClass("past");
} else if (hour < 16) {
    $("#hour-4-text").addClass("future");
}

/*5PM Styling*/
if (hour == 17) {
    $("#hour-5-text").addClass("present");
} else if (hour > 17) {
    $("#hour-5-text").addClass("past");
} else if (hour < 17) {
    $("#hour-5-text").addClass("future");
}

/*saving task to local storage*/
$(".saveBtn").on("click", function() {

    var text = $(this).siblings(".task").val();
    var row = $(this).parents().attr("id");

    localStorage.setItem(row,text);
});

/*getting task from local storage*/
$("#hour-9-row .task").val(localStorage.getItem("hour-9-row"));
$("#hour-10-row .task").val(localStorage.getItem("hour-10-row"));
$("#hour-11-row .task").val(localStorage.getItem("hour-11-row"));
$("#hour-12-row .task").val(localStorage.getItem("hour-12-row"));
$("#hour-1-row .task").val(localStorage.getItem("hour-1-row"));
$("#hour-2-row .task").val(localStorage.getItem("hour-2-row"));
$("#hour-3-row .task").val(localStorage.getItem("hour-3-row"));
$("#hour-4-row .task").val(localStorage.getItem("hour-4-row"));
$("#hour-5-row .task").val(localStorage.getItem("hour-5-row"));





