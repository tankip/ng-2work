import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

const routes: Routes = [ 
  {
    path : '',
    component : PatientDashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
