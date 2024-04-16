import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
  
  constructor() { }

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
