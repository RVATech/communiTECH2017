import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryPostingsService }  from './in-memory-postings';

import { AppComponent }         from './app.component';
import {PostingService} from "./posting.service";
import {PostingsComponent} from "./postings.component";
import {CompaniesComponent} from "./companies.component";
import { CompanyDetailComponent }  from './company-detail.component';
import { PostingSearchComponent }  from './posting-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PostingsComponent,
    CompaniesComponent,
      CompanyDetailComponent,
      PostingSearchComponent
  ],
  providers: [ PostingService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
