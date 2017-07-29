import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MdToolbarModule, MdListModule, MdCardModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventItemDetailComponent } from './event-item-detail/event-item-detail.component';
import { HttpModule } from '@angular/http';
import { CalendarService } from './calendar-service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventItemComponent,
    EventItemDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdIconModule,
  ],
  providers: [
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
