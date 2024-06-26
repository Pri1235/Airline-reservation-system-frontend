import { Injectable } from '@angular/core';
import { Trip } from '../shared/trip.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  selectedTrip: Trip;
  trips: Trip[];

  constructor(private http: HttpClient) {
    this.selectedTrip = {trip_id:0,flightId:0,departureDateTime:"",arrivalDateTime:"",fromAirportId:0,toAirportId:0,cost:0};
    this.trips = [];
  }

  postTrip(trip: Trip) {
    return this.http.post('http://localhost:8686/trip/add', trip);
  }

  getAllTrips() {
    return this.http.get('http://localhost:8686/trip/get/all');
  }

  deleteTrip(id: number) {
    return this.http.delete('http://localhost:8686/trip/' + id);
  }

  updateTrip(id: number, trip: Trip) {
    return this.http.put('http://localhost:8686/trip/' + id, trip);
  }

  findTripsBySourceDestinationAndDateTime(fromAirportId: number, toAirportId: number, departureDateTime: string, arrivalDateTime: string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8686/trip/from/' + fromAirportId + '/to/' + toAirportId + '/departure/' + departureDateTime + '/arrival/' + arrivalDateTime);
  }

  getAllFlights() {
    return this.http.get('http://localhost:8686/flight/get/all');
  }
  getAllAirports(){
    return this.http.get("http://localhost:8686/airport/get/all");
  }
}
