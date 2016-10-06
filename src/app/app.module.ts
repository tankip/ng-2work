import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientInfoBannerComponent } from './patient-info-banner/patient-info-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDashboardComponent,
    PatientInfoBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }