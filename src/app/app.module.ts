import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftFormComponent } from './aircraft-form/aircraft-form.component';
import { FormsModule } from '@angular/forms';
import { AircraftService } from './services/aircraft.service';
import { AirportComponent } from './airport/airport.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirportService } from './services/airport.service';


import { AdminPageComponent } from './admin-page/admin-page.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AirlineFormComponent } from './airline-form/airline-form.component';
import { AirlineService } from './services/airline.service';
import { FlightComponent } from './flight-form/flight-form.component';
import { FlightService } from './services/flight.service';
import { TripCrudComponent } from './trip-crud/trip-crud.component';



@NgModule({
  declarations: [
    AppComponent,
    AircraftFormComponent,
    AirportComponent,
    NavbarComponent,
    AirlineFormComponent,
    AdminPageComponent,
    TripFormComponent,
    HomePageComponent,
    FlightComponent,
    TripCrudComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AircraftService, AirportService, AirlineService,FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
