
$(function () {
  var currentTime = dayjs().format('HH');

  var time = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(time);

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage
    let saveBtn = $('.btn');
    let textArea = $('.description');



    //var text9 = localStorage.getItem("text9", input.value);
    // var text10 = localStorage.getItem("text10");
    // var text11 = localStorage.getItem("text11");
    // var text12 = localStorage.getItem("text12");
    // var text1 = localStorage.getItem("text1");
    // var text2 = localStorage.getItem("text2");
    // var text3 = localStorage.getItem("text3");
    // var text4 = localStorage.getItem("text4");
    // var text5 = localStorage.getItem("text5");
    //var storedInput = localStorage.getItem(textArea);


    function saveInput(){
      var text9 = localStorage.getItem("text9", input.value);
      textArea.each(function (potato, input) {
        console.log(input.id , input.value);
        localStorage.setItem(input.id, input.value);


      });

      // localStorage.setItem("text9", text9);
      // localStorage.setItem("text10", text10);
      // localStorage.setItem("text11", text11);
      // localStorage.setItem("text12", text12);
      // localStorage.setItem("text1", text1);
      // localStorage.setItem("text2", text2);
      // localStorage.setItem("text3", text3);
      // localStorage.setItem("text4", text4);
      // localStorage.setItem("text5", text5);

    }
    

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

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    saveBtn.on('click', saveInput);
  });