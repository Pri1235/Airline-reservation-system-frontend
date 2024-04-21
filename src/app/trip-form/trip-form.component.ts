import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';
import { NgForm } from '@angular/forms';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
  fromId: number = 0; // Property to store 'from' ID
  toId: number = 0; // Property to store 'to' ID
  date: string = ''; // Property to store 'date' value
  passengers: number = 0; // Property to store 'passengers' value
  constructor(private flightSearchService: FlightSearchService, private airportService: AirportService) { }

  searchFlights(form: NgForm) {
    const { from, to, date } = form.value; // Destructure form values

    // Fetch 'from' airport ID
    this.airportService.getAirportIdByCode(from).subscribe((fromId) => {
      this.fromId = fromId;

      // Fetch 'to' airport ID
      this.airportService.getAirportIdByCode(to).subscribe((toId) => {
        this.toId = toId;

        // Convert date to ISO format (if needed)
        const departureDateTime = new Date(date).toISOString();
        const arrivalDateTime = new Date(date).toISOString(); // Assuming arrival is same as departure for simplicity

        // Call the flight search service method with airport IDs
        this.flightSearchService
          .searchFlights(this.fromId, this.toId, departureDateTime, arrivalDateTime)
          .subscribe((response) => {
            console.log(response); // Handle the API response here
          });
      });
    });
  }

  ngOnInit(): void {
  }
  showTripCards: boolean = true;
  showPassengerFormPage: boolean = false;
  tripList: any[] = [
    { name: 'Trip 1', details: 'BLR - BOM FROM: 12-02-30 TO: 13-02-30' },
    { name: 'Trip 2', details: 'BLR - DEL FROM: 12-02-30 TO: 13-02-30' },
    { name: 'Trip 3', details: 'BOM - HYD FROM: 12-02-30 TO: 13-02-30' }
  ];

  showPassengerForm() {
    this.showTripCards = false;
    this.showPassengerFormPage = true;
  }

}
