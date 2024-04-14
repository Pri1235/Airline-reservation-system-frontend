import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../shared/flight';
import { NgForm } from '@angular/forms';
import { Airline } from '../shared/airline.model';
import { Aircraft } from '../shared/aircraft.model';

@Component({
  selector: 'flight-component',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightComponent implements OnInit {
  flightModel: Flight = new Flight(); 
  flights: Flight[] = []; 
  airlines: Airline[] = [];
  aircrafts: Aircraft[] = [];

  constructor(public flightService: FlightService) { }

  ngOnInit(): void {
    this.refreshFlights();
    this.fetchAirline(); // Corrected method name
    this.fetchAircraft(); // Corrected method name
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.flightService.postFlight(form.value).subscribe((res) => {
      this.refreshFlights();
      form.reset();
    });
  }

  refreshFlights() {
    this.flightService.getAllFlights().subscribe((res) => {
      this.flights = res as Flight[];
    });
  }

  updateFlight(flight: Flight) {
    this.flightModel = { ...flight }; 
  }

  deleteFlight(id: number) {
    if (confirm('Do you really want to delete?')) {
      this.flightService.deleteFlight(id).subscribe(() => {
        this.flights = this.flights.filter((flight) => flight.flight_id !== id);
      }, (error) => {
        console.error('Error deleting flight:', error);
      });
    }
  }

  fetchAirline() { 
    this.flightService.getAllAirlines().subscribe((res) => {
      this.airlines = res as Airline[];
    });
  }

  fetchAircraft() { 
    this.flightService.getAllAircrafts().subscribe((res) => {
      this.aircrafts = res as Aircraft[];
    });
  }
}
