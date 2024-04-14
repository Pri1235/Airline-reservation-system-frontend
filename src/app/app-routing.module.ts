import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from './airport/airport.component';
import { AircraftFormComponent } from './aircraft-form/aircraft-form.component';

import { AirlineFormComponent } from './airline-form/airline-form.component';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { FlightComponent } from './flight-form/flight-form.component';
import { TripCrudComponent } from './trip-crud/trip-crud.component';



const routes: Routes = [
  {
    path: 'airport',
    component:AirportComponent
  },
  {
    path: 'aircraft',
    component: AircraftFormComponent
  },
  {
    path: 'airline',
    component: AirlineFormComponent
  }
  , {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'airline',
    component: AirlineFormComponent
  },{
    path: 'flight',
    component:FlightComponent
  },{
    path:'trip',
    component:TripCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
