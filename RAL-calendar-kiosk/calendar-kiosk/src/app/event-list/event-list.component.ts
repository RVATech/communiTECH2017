import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CalendarService } from '../calendar-service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  @Input()
  public events: Event[];
}

interface Event {
  title: string;
  summary: string;
}
