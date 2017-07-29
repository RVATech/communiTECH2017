import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  public events;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // 1. Load the JavaScript client library.
    gapi.load('client:auth2', () => this.start());
  }

  start() {
      // 2. Initialize the JavaScript client library.
      gapi.client.init({
        'apiKey': 'AIzaSyDOMZPTcoeWiUU9M5w3KkQ8HdBA9HE95S4',
        // clientId and scope are optional if auth is not required.
        'clientId': '1094092402966-76htfduqg4l6k6fbai265if432tt2ef2.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/calendar.readonly',
      })
      .then(() => {
        return gapi.auth2.getAuthInstance().signIn();
      })
      .then(function () {
        // 3. Initialize and make the API request.
        return gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=2017-07-10T00:00:00Z&timeMax=2017-07-10T23:59:00Z`
          // ${new Date().toISOString()}`,
        });
      })
      .then(response => {
          this.events = response.result.items;
          this._cdr.detectChanges();
          console.log(this.events);
        },
        function (reason) {
          console.log('Error: ' + reason.result.error.message);
        }
      );
    }
}
