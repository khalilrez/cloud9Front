import { Component, OnInit, Output  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pharmacy } from '../pharmacydisplay/Pharmacy';
import { Router } from '@angular/router';
import { PharmacyService } from '../services-pharamcies-percentage/pharmacy.service';
@Component({
  selector: 'app-displaypharmacyadmin',
  templateUrl: './displaypharmacyadmin.component.html',
  styleUrls: ['./displaypharmacyadmin.component.css']
})

export class DisplaypharmacyadminComponent implements OnInit{

  pharamcys: Pharmacy[];
  term: string = ''; 
    
constructor(private ph:PharmacyService ,
  private router: Router){}
  ngOnInit() :void{
  
  
  this.getPharamcie();
  
  
  }
  private getPharamcie()
{
  this.ph.getPharmacyList().subscribe(data => 
    {
    this.pharamcys = data;
    })
}
updatepharamcy(idLocation :number)
{
this.router.navigate(['admin/Updatepharmacyadmin',idLocation]);
}


deletepharmacy(idLocation :number)
{
this.ph.deletepharm(idLocation).subscribe(
  data => {
console.log(data);
this.gotolist();
}
,error => console.log(error));

}
gotolist(){
  this.router.navigate(['/admin/order']);
}
}