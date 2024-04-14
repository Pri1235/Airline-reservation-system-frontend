import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service'; // Assuming you have a TripService similar to FlightService
import { Trip } from '../shared/trip.model';
import { NgForm } from '@angular/forms';
import { Flight } from '../shared/flight';
import { Airport } from '../shared/airport';

@Component({
  selector: 'app-trip',
  templateUrl: './trip-crud.component.html',
  styleUrls: ['./trip-crud.component.css']
})
export class TripComponent implements OnInit {
  tripModel: Trip = new Trip(); 
  trips: Trip[] = []; 
  flights: Flight[] = [];
  airports: Airport[] = [];

  constructor(public tripService: TripService) { }

  ngOnInit(): void {
    this.refreshTrips();
    this.fetchFlights();
    this.fetchAirports();
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.tripService.postTrip(form.value).subscribe((res) => {
      this.refreshTrips();
      form.reset();
    });
  }

  refreshTrips() {
    this.tripService.getAllTrips().subscribe((res) => {
      this.trips = res as Trip[];
    });
  }

  updateTrip(trip: Trip) {
    this.tripModel = { ...trip }; 
  }

  deleteTrip(id: number) {
    if (confirm('Do you really want to delete?')) {
      this.tripService.deleteTrip(id).subscribe(() => {
        this.trips = this.trips.filter((trip) => trip.trip_id !== id);
      }, (error) => {
        console.error('Error deleting trip:', error);
      });
    }
  }

  fetchFlights() { 
    this.tripService.getAllFlights().subscribe((res) => {
      this.flights = res as Flight[];
    });
  }

  fetchAirports() { 
    this.tripService.getAllAirports().subscribe((res) => {
      this.airports = res as Airport[];
    });
  }
}
