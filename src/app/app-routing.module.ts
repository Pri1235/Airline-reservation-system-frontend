import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from './airport/airport.component';
import { AircraftFormComponent } from './aircraft-form/aircraft-form.component';

const routes: Routes = [
  {
    path: 'airport',
    component:AirportComponent
  },
  {
    path: 'aircraft',
    component: AircraftFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
