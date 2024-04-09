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


@NgModule({
  declarations: [
    AppComponent,
    AircraftFormComponent,
    AirportComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AircraftService,AirportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
