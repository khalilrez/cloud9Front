import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';
import { Order } from './order';
import { Router } from '@angular/router';


@Component({
  
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css']
})
export class Order2Component implements OnInit {
  term: string = ''; 
  orders:Order[];

 ch: string;
;
  constructor(private orderservice: OrderService,
    private router: Router){}
ngOnInit():void {
  this.getOrder();
 
}
private getOrder()
{
  this.orderservice.getorderList().subscribe(data => 
    {
    this.orders =data;
    })
}

 updateorder(idOrder :number)
{
this.router.navigate(['admin/Updateorder',idOrder]);


}
deleteorder(idOrder :number)
{
this.orderservice.deleteorder(idOrder).subscribe(
  data => {
console.log(data);
this.getOrder();
this.router.navigate(['admin/order']);
  }
)

}

}
