import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { Order } from '../order2/order';
import { OrderService } from '../order2/order.service';

@Component({
  selector: 'app-updatzorderadmin',
  templateUrl: './updatzorderadmin.component.html',
  styleUrls: ['./updatzorderadmin.component.css']
})
export class UpdatzorderadminComponent implements OnInit {
  order: Order ;
  idOrder : number

constructor(private or: OrderService,
  private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
    this.order = new Order();
    this.idOrder = this.route.snapshot.params['idLocation'];
    this.or.getorder(this.idOrder).subscribe(
      data =>
      {
        console.log(data)
        this.order = data ;
      }, error => console.log(error));

  }

update(){
  this.or.updateorder(this.idOrder,this.order).subscribe(data =>
   {
    console.log(data);
    this.order = new Order ();
    this.gotolist();
  }
  ,error => console.log(error));
  

}


  onSubmitphar()
  {
  this.update();
  }

  gotolist(){
    this.router.navigate(['/admin/order']);
  }
  }

