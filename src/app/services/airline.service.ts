import { Injectable } from '@angular/core';
import { Airline } from '../shared/airline.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  selectedAirline: Airline;
  airlines: Airline[];

  url:string = "http://localhost:8686/airline"

  constructor(private http:HttpClient) { 
    this.selectedAirline = {airlineId: 0, name: ""}
    this.airlines = [];
  }

  postAirline(airline: Airline) {
    return this.http.post(this.url + "/add", airline);
  }

  updateAirline(airline: Airline) {
    return this.http.put(this.url + "/" + airline.airlineId, airline);
  }

  getAllAirlines() {
    return this.http.get<Airline[]>(this.url + "/get/all");
  }

  deleteAirline(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}
