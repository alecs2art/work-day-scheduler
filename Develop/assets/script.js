var timeDisplay = document.querySelector("#currentDay");

timeDisplay.textContent = moment().format('MMMM Do YYYY');

$(".saveBtn").on("click", function() {

    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
})


