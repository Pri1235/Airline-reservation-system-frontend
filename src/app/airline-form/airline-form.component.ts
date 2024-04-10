import { NgForm } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { Airline } from '../shared/airline.model';

@Component({
  selector: 'app-airline-form',
  templateUrl: './airline-form.component.html',
  styleUrls: ['./airline-form.component.css']
})
export class AirlineFormComponent implements OnInit {

  constructor(public es: AirlineService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refreshAirlines();
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.es.postAirline(form.value).subscribe((res)=>{
      console.log("Airline record inserted successfully....")
      form.reset();
      this.refreshAirlines();
    })
  }

  refreshAirlines()
  {
    this.es.getAllAirlines().subscribe((res)=>{
      this.es.airlines = res as Airline[];
      console.log(this.es.airlines)
      this.cdr.detectChanges();
    })
    this.cdr.detectChanges();
  }

  updateAirline(airline:Airline)
  {
    console.log(airline);
    this.es.selectedAirline = airline;
  }

  deleteAirlineById(id: number)
  {
    console.log("ID to be deleted : "+id)
    if(confirm("Do you really want to delete?"))
    {
      this.es.deleteAirline(id).subscribe((res)=>{  
        this.cdr.detectChanges();
        this.refreshAirlines();
      })
    }
  }

}
