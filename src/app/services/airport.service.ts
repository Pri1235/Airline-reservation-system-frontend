import { Injectable } from '@angular/core';
import { Airport } from '../shared/airport';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AirportService {
  selectedAirport: Airport;
  airports : Airport[];

  constructor(private http:HttpClient){
    this.selectedAirport={airport_id:0,name:"",code:"",location:""}
    this.airports = []
  }

  postAirport(ap:Airport){
    return this.http.post("http://localhost:8686/airport",ap)
  }
  getAllAirports(){
    return this.http.get("http://localhost:8686/airports");
  }

  deleteAirpt(id:number){
    return this.http.delete("http://localhost:8686/airport/"+id)
  }
}
