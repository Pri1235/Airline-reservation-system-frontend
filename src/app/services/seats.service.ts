import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Seats } from '../shared/seats.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  selectedSeat: Seats;
  seats: Seats[];
  constructor(private http:HttpClient) {
    this.selectedSeat ={seat_id:0,seat_number:"",class_type:"",Aircraft:null}
    this.seats=[]
   }

   getAllSeats(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8686/seats');
  }

  addSeat(min: number, max: number, seat: any): Observable<any> {
    return this.http.post(`http://localhost:8686/seat/${min}/${max}`, seat);
  }

  configureSeats(startSeatId: number, endSeatId: number, aircraftId: number): Observable<any> {
    return this.http.post(`http://localhost:8686/configure/${startSeatId}/${endSeatId}/${aircraftId}`, {});
  }
}
