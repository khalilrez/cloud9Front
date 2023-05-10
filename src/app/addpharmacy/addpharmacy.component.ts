import { Component ,OnInit} from '@angular/core';
import { PharmacyService } from '../services-pharamcies-percentage/pharmacy.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Pharmacy } from '../pharmacydisplay/Pharmacy';

@Component({
  selector: 'app-addpharmacy',
  templateUrl: './addpharmacy.component.html',
  styleUrls: ['./addpharmacy.component.css']
})

export class AddpharmacyComponent implements OnInit{
 pharmacy: Pharmacy = new Pharmacy();
  constructor(private pharamcyService: PharmacyService ,
    private router: Router){}
 ngOnInit(): void {
  }
  saveOrder()
  {

     this.pharamcyService.addPharmacy(this.pharmacy).subscribe(data =>
      {
        console.log(data);
        this.gotolist();
      },
      error => console.log(error));
  }

  gotolist()
{
this.router.navigate(['/admin/Displaypharmacyadmin']);

}
onSubmitphar()
  {
    console.log(this.pharmacy)
    this.saveOrder();
  }

}
