import { Injectable } from '@angular/core';
import { Aircraft } from '../shared/aircraft.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  selectedAircraft: Aircraft;
  aircrafts: Aircraft[];
  

  url:string = "http://localhost:8686/aircrafts"

  constructor(private http:HttpClient) { 
    this.selectedAircraft = {aircraft_id: 1, make: "", model: "", capacity: 0}
    this.aircrafts = [];
  }

  postAircraft(aircraft:Aircraft)
  {
    return this.http.post(this.url, aircraft);
  }  

  updateAircraft(aircraft:Aircraft){
    return this.http.put(this.url , aircraft);
  }

  getAllAircrafts()
  {
    return this.http.get(this.url);
  
  }

  deleteAircraft(id: number)
  {
    return this.http.delete(this.url+"/"+id)
  }
}
