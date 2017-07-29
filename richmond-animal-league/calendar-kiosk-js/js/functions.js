var currentOffset = 0;

function addClickHandlers(){
  $("#nextDayButton, #prevDayButton").click(function(event){
    event.preventDefault();

    if(this.id === 'nextDayButton'){
      currentOffset++;
    } else if(this.id === 'prevDayButton'){
      currentOffset--;
    }

    setTimeout(function(){
      //clear accordion
      $("#accordion").text("");

      //fetch events for newly selected date
      listUpcomingEvents(currentOffset);

      //update date header
      updateDateHeader();

    }, 1000);
  });
}

function updateDateHeader(){
  $("#today").text(moment().add(currentOffset, 'days').format("dddd, MMMM Do YYYY"));
}

$(document).ready(function() {
    updateDateHeader();
    addClickHandlers();
});
