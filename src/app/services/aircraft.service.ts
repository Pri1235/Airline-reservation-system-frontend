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
  

  url:string = "http://localhost:8686/aircraft"

  constructor(private http:HttpClient) { 
    this.selectedAircraft = {aircraft_id: 1, make: "", model: "", capacity: 0}
    this.aircrafts = [];
  }

  postAircraft(aircraft: Aircraft) {
    return this.http.post<Aircraft>(`${this.url}/add`, aircraft);
  }

  // PUT method for updating an existing aircraft by ID
  updateAircraft(aircraft: Aircraft) {
    return this.http.put<Aircraft>(`${this.url}/${aircraft.aircraft_id}`, aircraft);
  }

  // GET method for fetching all aircrafts
  getAllAircrafts() {
    return this.http.get<Aircraft[]>('http://localhost:8686/aircraft/get/all');
  }

  // DELETE method for deleting an aircraft by ID
  deleteAircraft(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
