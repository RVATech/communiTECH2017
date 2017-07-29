import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostingsComponent} from "./postings.component";
import {CompaniesComponent} from "./companies.component";
import {CompanyDetailComponent} from "./company-detail.component"

const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
    { path: 'company_detail/:id', component: CompanyDetailComponent },
    { path: 'postings',     component: PostingsComponent },
    { path: 'companies',  component: CompaniesComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
