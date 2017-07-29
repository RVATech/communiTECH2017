var buttonClickCount = 0;
var currentlySelectedDate = new Date();

function addClickHandlers(){
  $("#nextDayButton, #prevDayButton").click(function(event){
    event.preventDefault();

    if(this.id === 'nextDayButton'){
      buttonClickCount++;
    } else if(this.id === 'prevDayButton'){
      buttonClickCount--;
    }

    setTimeout(function(){
      //update global date
      currentlySelectedDate.setDate(currentlySelectedDate.getDate() + buttonClickCount);

      //clear accordion
      $("#accordion").text("");

      //fetch events for newly selected date
      listUpcomingEvents(buttonClickCount);

      //reset global count
      buttonClickCount = 0;

      //update date header
      updateDateHeader(currentlySelectedDate);

    }, 1000);
  });
}

function updateDateHeader(selectedDate){
  if(!selectedDate){
    selectedDate = new Date();
  }

  $("#today").text(selectedDate.toLocaleString('en-us', {  weekday: 'long', month: 'long', day:'2-digit' }));
}

$(document).ready(function() {
    updateDateHeader();
    addClickHandlers();
});
