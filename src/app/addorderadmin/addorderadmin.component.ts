import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../order2/order';
import { OrderService } from '../order2/order.service';

@Component({
  selector: 'app-addorderadmin',
  templateUrl: './addorderadmin.component.html',
  styleUrls: ['./addorderadmin.component.css']
})
export class AddorderadminComponent implements OnInit{

  order: Order = new Order();
  term: string = ''; 
    
constructor(private ph:OrderService ,
  private router: Router){}
  ngOnInit() :void{
  
  }
  saveOrder()
  {

     this.ph.addorder(this.order).subscribe(data =>
      {
        console.log(data);
        this.gotolist();
      },
      error => console.log(error));
  }

  gotolist()
{
this.router.navigate(['/admin/addorder']);

}
onSubmitphar()
  {
    console.log(this.order)
    this.saveOrder();
  }
}