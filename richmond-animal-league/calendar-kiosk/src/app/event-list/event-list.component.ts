import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: string[];

  constructor() { }

  ngOnInit() {
    this.events = [
      'item1',
      'item2',
    ];
  }

}

interface Event {
  title: string;
}
