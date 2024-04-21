import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  private apiUrl = 'http://localhost:8686/trip/from/';
  
  constructor(private http: HttpClient) { }
  
  searchFlights(fromAirportId: number, toAirportId: number, departureDateTime: string, arrivalDateTime: string): Observable<any> {
    const url = `${this.apiUrl}${fromAirportId}/to/${toAirportId}/departure/${departureDateTime}/arrival/${arrivalDateTime}`;
    return this.http.get(url);
  }
}
