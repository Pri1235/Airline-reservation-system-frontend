import { NgForm } from '@angular/forms';
import { AircraftService } from '../services/aircraft.service';
import { Aircraft } from '../shared/aircraft.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'aircraft-form',
  templateUrl: './aircraft-form.component.html',
  styleUrls: ['./aircraft-form.component.css']
})
export class AircraftFormComponent implements OnInit {

  

  constructor(public es: AircraftService,private cdr: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.refreshAircrafts();
  }

  onSubmit(form: NgForm)
  {
    console.log(form.value)
    this.es.postAircraft(form.value).subscribe((res)=>{
      console.log("Aircraft record inserted successfully....")
      form.reset();
      this.cdr.detectChanges();
      this.refreshAircrafts();

    })
  }

  refreshAircrafts()
  {
    this.es.getAllAircrafts().subscribe((res)=>{
      this.es.aircrafts = res as Aircraft[];
      console.log(this.es.aircrafts)
      this.cdr.detectChanges();
    })
    this.cdr.detectChanges();
  }

  updateAircraft(aircraft:Aircraft)
  {
    console.log(aircraft);
    this.es.selectedAircraft = aircraft;
  }

  deleteAircraftById(id: number)
  {
    console.log("ID to be deleted : "+id)
    if(confirm("Do you really want to delete?"))
    {
      this.es.deleteAircraft(id).subscribe((res)=>{
        
        this.cdr.detectChanges();
        this.refreshAircrafts();
      })
    }
  }

}
