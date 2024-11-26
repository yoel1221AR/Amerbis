import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { IpButtonFiltersComponent } from './components/ip-button-filters/ip-button-filters.component';
import { RootComponent } from './components/root/root.component';
import { AbHomeViewComponent } from './views/ip-dashboard-view/ab-home-view.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import {TemporarioStaffServicesComponent } from './components/temporary-staff/temporary-staff.component';
import { FinsuiteRoutingModule } from './finsuite-routing.module';
import { FacilityServicesComponent } from './components/facility-services/facility-services.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { SearchSelectionComponent } from './components/search-selection/search-selection.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us.component';
import { AmerbisExperienceComponent } from './components/amerbis-experience/amerbis-experience.component';
import { JobOpportunitiesComponent } from './components/job-opportunities/job-opportunities.component';
import { BannersComponent } from './components/banners/banners.component';

@NgModule({
  declarations: [
    RootComponent,
    IpButtonFiltersComponent,
    AbHomeViewComponent,
    DirectorsComponent,
    WhatWeDoComponent,
    TemporarioStaffServicesComponent,
    FacilityServicesComponent,
    PayrollComponent,
    SearchSelectionComponent,
    WorkWithUsComponent, AmerbisExperienceComponent, JobOpportunitiesComponent, BannersComponent
  ],
  imports: [
    CommonModule,
    FinsuiteRoutingModule,
    SharedModule,
    MatNativeDateModule,
    TranslateModule,  
    MatSortModule, 
    CommonModule,
  ],
  providers: [
    TranslateService,
    SharedModule,
    TranslateModule,
    DatePipe,
    CurrencyPipe,
  ],
})
export class FinsuiteModule {}
