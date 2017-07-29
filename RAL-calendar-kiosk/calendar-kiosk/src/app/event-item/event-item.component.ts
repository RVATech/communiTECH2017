import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  @Input()
  event;

  private _shown = false;

  get shown() {
    return this._shown;
  }

  set shown(shown: boolean) {
    if (shown !== this.shown) {
      this._shown = shown;
      this._cdr.detectChanges();
    }
  }

  constructor(private _cdr: ChangeDetectorRef) {}
}
