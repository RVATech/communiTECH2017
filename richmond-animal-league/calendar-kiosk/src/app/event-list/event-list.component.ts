import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar-service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  public events;

  constructor() { }

  ngOnInit() {
    // this.events = this._calendarService.initClient
  }

}

interface Event {
  title: string;
}
