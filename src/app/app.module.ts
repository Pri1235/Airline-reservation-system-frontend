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


@NgModule({
  declarations: [
    AppComponent,
    AircraftFormComponent,
    AirportComponent,
    NavbarComponent,
    AirlineFormComponent,
    AdminPageComponent,
    TripFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AircraftService, AirportService, AirlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
