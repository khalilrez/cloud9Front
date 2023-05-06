import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pharmacy } from './Pharmacy';
import { Router } from '@angular/router';
import { PharmacyService } from '../services-pharamcies-percentage/pharmacy.service';
import { Percentage } from '../models pharmacy order percentage/Percentage';

@Component({
  selector: 'app-research ',
  templateUrl: './pharmacydisplay.component.html',
  styleUrls: ['./pharmacydisplay.component.css']
})
export class PharmacydisplayComponent implements OnInit {
  term: string = ''; 

  op: string = ''; 
pharamcys: Pharmacy[];
perc: Percentage[];
  
constructor(private ph:PharmacyService ,
  private router: Router){}
ngOnInit() :void{
  //let response=this.http.get("http://localhost:8075/api/PharamcyLocation");
  //response.subscribe((data)=>this.liste=data);
  //let map=this.http.get("http://localhost:8075/map");

this.getPharamcie();

}
private getPharamcie()
{
  this.ph.getPharmacyList().subscribe(data => 
    {
    this.pharamcys = data;
    })
}
 getpercentage ()
 {
this.ph.gettype().subscribe(data => 
  {
  this.perc = data;
  })



 }





}
