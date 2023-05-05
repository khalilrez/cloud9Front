import { Component, OnInit } from '@angular/core';
import { Order } from '../order2/order';
import { OrderService } from '../order2/order.service';
import { error } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addoreder',
  templateUrl: './addoreder.component.html',
  styleUrls: ['./addoreder.component.css']
})
export class AddorederComponent implements OnInit {
  order: Order = new Order();
  constructor(private orderService: OrderService,
    private router: Router){}
  ngOnInit(): void {
  
  }

  saveOrder()
  {

     this.orderService.addorder(this.order).subscribe(data =>
      {
        console.log(data);
        this.gotolist();
      },
      error => console.log(error));
  }
gotolist()
{
this.router.navigate(['/order']);

}

  onSubmit()
  {

    console.log(this.order);
    this.saveOrder();
  }

}
