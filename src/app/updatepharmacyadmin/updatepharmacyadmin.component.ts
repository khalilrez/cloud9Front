import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../services-pharamcies-percentage/pharmacy.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Pharmacy } from '../pharmacydisplay/Pharmacy';
import { error } from 'jquery';

@Component({
  selector: 'app-updatepharmacyadmin',
  templateUrl: './updatepharmacyadmin.component.html',
  styleUrls: ['./updatepharmacyadmin.component.css']
})
export class UpdatepharmacyadminComponent implements OnInit {
  pharmacy: Pharmacy ;
  idLocation : number

constructor(private pharamcyService: PharmacyService ,
  private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
    this.pharmacy = new Pharmacy();
    this.idLocation = this.route.snapshot.params['idLocation'];
    this.pharamcyService.getpharamcybyid(this.idLocation).subscribe(
      data =>
      {
        console.log(data)
        this.pharmacy = data ;
      }, error => console.log(error));

  }

update(){
  this.pharamcyService.updatepharamcy(this.idLocation,this.pharmacy).subscribe(data =>
   {
    console.log(data);
    this.pharmacy = new Pharmacy ();
    this.gotolist();
  }
  ,error => console.log(error));
  

}
gotolist(){
  this.router.navigate(['/admin/Displaypharmacyadmin']);
}

  onSubmitphar()
  {
  this.update();
  }

 
  }

