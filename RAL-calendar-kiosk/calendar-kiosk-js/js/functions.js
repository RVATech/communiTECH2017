var currentOffset = 0;

function addClickHandlers(){
  var clickTimeout;

  $("#nextDayButton, #prevDayButton, #refreshButton").click(function(event){
    clearTimeout(clickTimeout);

    event.preventDefault();

    if(this.id === 'nextDayButton'){
      currentOffset++;
    } else if(this.id === 'prevDayButton'){
      currentOffset--;
    }

   clickTimeout = setTimeout(function(){
      getEvents();

    }, 500);
  });
}

function getEvents(){
  //clear accordion
  $('#accordion').html('');

  //update date header
  updateDateHeader();

  //fetch events for newly selected date
  listUpcomingEvents(currentOffset);
}

function updateDateHeader(){
  $("#today").text(moment().add(currentOffset, 'days').format("dddd, MMMM Do YYYY"));
}

$(document).ready(function() {
    updateDateHeader();
    addClickHandlers();
});
