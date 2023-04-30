import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-research ',
  templateUrl: './pharmacydisplay.component.html',
  styleUrls: ['./pharmacydisplay.component.css']
})
export class PharmacydisplayComponent implements OnInit {
  liste:any;
  term: string = ''; 

  op: string = ''; 

  
constructor(private http:HttpClient){}
ngOnInit() {
  let response=this.http.get("http://localhost:8075/api/PharamcyLocation");
  response.subscribe((data)=>this.liste=data);
  let map=this.http.get("http://localhost:8075/map");

}




}
