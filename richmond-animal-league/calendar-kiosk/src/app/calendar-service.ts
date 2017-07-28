//import   * as gapi from "gapi";
class CalendarService{
      
    constructor () {
          this.initClient();
      }
     initClient() {
         var CLIENT_ID =  '136445539422-inbochsshi83reug93sluhiekkfkqdha.apps.googleusercontent.com';
   
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          gapi.auth2.getAuthInstance().signIn();
          //authorizeButton.onclick = handleAuthClick;
          //signoutButton.onclick = handleSignoutClick;
        });
      }
      updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          //authorizeButton.style.display = 'none';
          //signoutButton.style.display = 'block';
          this.listUpcomingEvents();
        } 
      }
     
      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
    listUpcomingEvents() {
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;
          
          
         
          return JSON.stringify(events);
        });
      }

 
}