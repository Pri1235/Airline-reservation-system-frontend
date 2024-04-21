import { Injectable } from '@angular/core';
import { Airport } from '../shared/airport';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    return this.http.post("http://localhost:8686/airport/add",ap)
  }
  getAllAirports(){
    return this.http.get("http://localhost:8686/airport/get/all");
  }

  deleteAirpt(id:number){
    return this.http.delete("http://localhost:8686/airport/"+id)
  }
  getAirportIdByCode(airportCode: string): Observable<number> {
    const url = `http://localhost:8686/airport/code/${airportCode}`;
    return this.http.get<number>(url);
  }
}
