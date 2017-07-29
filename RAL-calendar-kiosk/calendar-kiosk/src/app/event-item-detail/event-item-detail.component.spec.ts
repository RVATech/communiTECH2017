import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemDetailComponent } from './event-item-detail.component';

describe('EventItemDetailComponent', () => {
  let component: EventItemDetailComponent;
  let fixture: ComponentFixture<EventItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
