import { Component, OnInit } from '@angular/core';
import { Order } from '../order2/order';
import { OrderService } from '../order2/order.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit{
  order: Order ;
  idOrder: number;
constructor(private orderService: OrderService,
  private route: ActivatedRoute,
  private router: Router){}

ngOnInit(): void {
  this.order = new Order();
  this.idOrder = this.route.snapshot.params['idOrder'];
  this.orderService.getorder(this.idOrder).subscribe(data =>
    {
this.order = data ;
    }, error => console.log(error)
    );
}


  onSubmit()
  {
    this.orderService.updateorder(this.idOrder,this.order)
    .subscribe(data =>
     
     {
      console.log(data);
      this.order = new Order ();
      this.goToorderist();
    }
    , error => console.log(error));
    
  }
  goToorderist(){
    this.router.navigate(['/order']);
  }

}
