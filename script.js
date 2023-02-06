// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var time = dayjs().format('HH:MM:SS a');
//var hourBlock = [
//  {
//    hour9: document.getElementById('hour-9'),
//  }
//]

$(function () {
  var currentTime = dayjs().format('HH:MM:SS a');
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function applyTimeCompare() {
      var hour9 = 09;
      var hour10 = 10;
      var hour11 = 11;
      var hour12 = 12;
      var hour1 = 13;
      var hour2 = 14;
      var hour3 = 15;
      var hour4 = 16;
      var hour5 = 17;

      if (hour9 > currentTime('HH')) {
        $('#hour-9').addClass('past');
      }else if(hour9 == time('HH')) {
        $('#hour-9').addClass('pressent');
      }else {
        $('#hour-9').addClass('future');
      }
//      for (i = 0; i < hourBlock.length; i++) {
//        if (hourBlock > time) {
//        }
      }
    });
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.