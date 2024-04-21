import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeatsService } from '../services/seats.service';
import { Seats } from '../shared/seats.model';

@Component({
  selector: 'app-seat-crud',
  templateUrl: './seat-crud.component.html',
  styleUrls: ['./seat-crud.component.css']
})
export class SeatCrudComponent implements OnInit {

  showSuccessAlert: boolean = false;

  constructor(public seatService: SeatsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refreshSeats();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.seatService.addSeat(form.value.min, form.value.max, form.value.seat).subscribe((res) => {
        console.log("Seat added successfully.");
        form.reset();
        this.cdr.detectChanges();
        this.refreshSeats();
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 2000);
      });
    } else {
      console.log("Form is invalid.");
    }
  }

  refreshSeats() {
    this.seatService.getAllSeats().subscribe((res) => {
      this.seatService.seats = res as Seats[];
      console.log(this.seatService.seats);
      this.cdr.detectChanges();
    });
  }

  configureSeats(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.seatService.configureSeats(form.value.startSeatId, form.value.endSeatId, form.value.aircraftId).subscribe((res) => {
        console.log("Seats configured successfully.");
        form.reset();
        this.cdr.detectChanges();
        this.refreshSeats();
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 2000);
      });
    } else {
      console.log("Form is invalid.");
    }
  }
}
