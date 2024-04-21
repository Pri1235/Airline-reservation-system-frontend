import { Component, OnInit } from '@angular/core';
import { AirportService } from '../services/airport.service';
import { Airport } from '../shared/airport';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'airport-component',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  showSuccessAlert: boolean = false;
  constructor(public es:AirportService) { }

  ngOnInit(): void {
    this.refreshAirports();
  }
  onSubmit(form:NgForm){
    if (form.valid) {
      console.log(form.value);
      this.es.postAirport(form.value).subscribe((res) => {
        this.refreshAirports();
        form.reset();
        this.showSuccessAlert = true; // Show the success alert
        setTimeout(() => {
          this.showSuccessAlert = false; // Hide the alert after 5 seconds
        }, 2000);
      });
    } else {
      console.log("Form is invalid.");
    }
}
  refreshAirports(){
    this.es.getAllAirports().subscribe((res)=>{
      this.es.airports = res as Airport []
    })
  }
  updateAirport(ap:Airport){
    console.log(ap)
    this.es.selectedAirport = ap
   
  }
  deleteAirport(id:number){
    if(confirm("Do you really want to delete?")){
      this.es.deleteAirpt(id).subscribe(() => {
        this.es.airports = this.es.airports.filter(ap => ap.airport_id !== id);
      }, (error) => {
        console.error("Error deleting airport:", error);
      });
    }
  }

}
