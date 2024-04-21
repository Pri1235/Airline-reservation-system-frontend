import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  showSuccessAlert: boolean = false;
  flightModel: Flight = new Flight(); 
  flights: Flight[] = []; 
  airlines: Airline[] = [];
  aircrafts: Aircraft[] = [];

  constructor(public flightService: FlightService, private cr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refreshFlights();
    this.fetchAirlines(); // Updated method name
    this.fetchAircrafts(); // Updated method name
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.flightService.postFlight(form.value).subscribe(
        
        (res) => {
          if (typeof res === 'string') {
            console.log("Response is a string:", res);
            // Handle the string response accordingly
          } else {
            console.log("Response is not a string:", res);
            // Handle other types of responses as needed
          }
          console.log(res); // Log the response
          this.refreshFlights();
          form.reset();
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.showSuccessAlert = false;
          }, 2000);
        },
        (error) => {
          console.error("Error adding flight:", error);
        }
      );
    } else {
      console.log("Form is invalid.");
    }
  }

  refreshFlights() {
    this.flightService.getAllFlights().subscribe((res) => {
      this.flights = res as Flight[];
      this.cr.detectChanges();
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

  fetchAirlines() { 
    this.flightService.getAllAirlines().subscribe((res) => {
      this.airlines = res as Airline[];
    });
  }

  fetchAircrafts() { 
    this.flightService.getAllAircrafts().subscribe((res) => {
      this.aircrafts = res as Aircraft[];
    });
  }

  
}
