import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar-service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [CalendarService]
})
export class EventListComponent implements OnInit {
  public events;

  constructor(private _calendarService: CalendarService) { }

  ngOnInit() {
    this.events = this._calendarService.listUpcomingEvents();
  }

}

interface Event {
  title: string;
}
