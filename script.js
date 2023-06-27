// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  const currentDay = dayjs().format('dddd, MMMM D, YYYY'); //gets the current day / date

  $('#currentDay').text(currentDay); //displays current date

  $(".saveBtn").on("click", function () { //click event listener for the save buttons
    var text = $(this).siblings(".description").val(); //gets the sibling element value for the description class
    var time = $(this).parent().attr("id"); //gets the parent element id 

    localStorage.setItem(time, text); //storing in local storage

  });

  function timeTracker() { //time tracker function
    const currentHour = dayjs().hour(); // gets current time in hours

    $('#timeNow').text(dayjs().format('h:mm A')); //formats and displays the current time

    $(".time-block").each(function () { //
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentHour) { //checking if the timeblock is less than the current hour time
        $(this).removeClass('present future').addClass('past'); // adds and removes past / present classes to coordinate with the colors
      } else if (timeBlock === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  $('#hour9 .description').val(localStorage.getItem('hour9')); //sets the values of the textarea elements based on the data from local storage
  $('#hour10 .description').val(localStorage.getItem('hour10')); //ensures the data typed in is still there after being refreshed
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));


  timeTracker(); //calling the time tracker function
}); 
