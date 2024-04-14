import { Injectable } from '@angular/core';
import { Flight } from '../shared/flight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  selectedFlight: Flight;
  flights: Flight[];

  constructor(private http: HttpClient) {
    this.selectedFlight = {flight_id:0,flight_number:0,flight_name:"",aircraft_id:0,airlineId:0,trip:0}
    this.flights = [];
  }

  postFlight(flight: Flight) {
    return this.http.post('http://localhost:8686/flight/add', flight);
  }

  getAllFlights() {
    return this.http.get('http://localhost:8686/flight/get/all');
  }

  deleteFlight(id: number) {
    return this.http.delete('http://localhost:8686/flight' + id);
  }

  updateFlight(id: number, flight: Flight) {
    return this.http.put('http://localhost:8686/flight' + id, flight);
  }

  getFlightsByAirlineId(airlineId: number): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8686/flight' + airlineId);
  }

  getAllAirlines(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8686/airline/get/all');
  }

  getAllAircrafts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8686/aircraft/get/all');
  }
}