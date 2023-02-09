
$(function () {
  //sets the current hour
  var currentTime = dayjs().format('HH');

  //sets the date 
  var time = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(time);
    let saveBtn = $('.btn');
    let textArea = $('.description');

    //saves the text input
    function saveInput(){
      $('.saveBtn').on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time,value);
      });
    }

    //keeps the text input on the page
    $('#hour-9 .description').val(localStorage.getItem("9"));
    $('#hour-10 .description').val(localStorage.getItem("10"));
    $('#hour-11 .description').val(localStorage.getItem("11"));
    $('#hour-12 .description').val(localStorage.getItem("12"));
    $('#hour-1 .description').val(localStorage.getItem("1"));
    $('#hour-2 .description').val(localStorage.getItem("2"));
    $('#hour-3 .description').val(localStorage.getItem("3"));
    $('#hour-4 .description').val(localStorage.getItem("4"));
    $('#hour-5 .description').val(localStorage.getItem("5"));
    

    //The function that applies the colors to the time blocks
    function applyTimeCompare() {
      //sets the variables for block times
      var hour9 = 09;
      var hour10 = 10;
      var hour11 = 11;
      var hour12 = 12;
      var hour1 = 13;
      var hour2 = 14;
      var hour3 = 15;
      var hour4 = 16;
      var hour5 = 17;
      //checks to see if time block is in past, present or future
      $("").each()
      if (hour9 < currentTime) {
        $('#hour-9').addClass('past');
      }else if(hour9 == currentTime) {
        $('#hour-9').addClass('present');
      }else {
        $('#hour-9').addClass('future');
      }
      if (hour10 < currentTime) {
        $('#hour-10').addClass('past');
      }else if(hour10 == currentTime) {
        $('#hour-10').addClass('present');
      }else {
        $('#hour-10').addClass('future');
      }
      if (hour11 < currentTime) {
        $('#hour-11').addClass('past');
      }else if(hour11 == currentTime) {
        $('#hour-11').addClass('present');
      }else {
        $('#hour-11').addClass('future');
      }
      if (hour12 < currentTime) {
        $('#hour-12').addClass('past');
      }else if(hour12 == currentTime) {
        $('#hour-12').addClass('present');
      }else {
        $('#hour-12').addClass('future');
      }
      if (hour1 < currentTime) {
        $('#hour-1').addClass('past');
      }else if(hour1 == currentTime) {
        $('#hour-1').addClass('present');
      }else {
        $('#hour-1').addClass('future');
      }
      if (hour2 < currentTime) {
        $('#hour-2').addClass('past');
      }else if(hour2 == currentTime) {
        $('#hour-2').addClass('present');
      }else {
        $('#hour-2').addClass('future');
      }
      if (hour3 < currentTime) {
        $('#hour-3').addClass('past');
      }else if(hour3 == currentTime) {
        $('#hour-3').addClass('present');
      }else {
        $('#hour-3').addClass('future');
      }
      if (hour4 < currentTime) {
        $('#hour-4').addClass('past');
      }else if(hour4 == currentTime) {
        $('#hour-4').addClass('present');
      }else {
        $('#hour-4').addClass('future');
      }
      if (hour5 < currentTime) {
        $('#hour-5').addClass('past');
      }else if(hour5 == currentTime) {
        $('#hour-5').addClass('present');
      }else {
        $('#hour-5').addClass('future');
      }
      }
      applyTimeCompare();

      //ads on click event listener to saveBtn
    saveBtn.on('click', saveInput);
  });