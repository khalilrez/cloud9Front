import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../order2/order';
import { OrderService } from '../order2/order.service';

@Component({
  selector: 'app-orderadmin',
  templateUrl: './orderadmin.component.html',
  styleUrls: ['./orderadmin.component.css']
})
export class OrderadminComponent implements OnInit {
  term: string = ''; 

  op: string = ''; 
order: Order[];
  
constructor(private ph:OrderService ,
  private router: Router){}
ngOnInit() :void{

this.getorder();

}
private getorder()
{
  this.ph.getorderList().subscribe(data => 
    {
    this.order = data;
    })
}
updateor(idOrder :number)
{
this.router.navigate(['/admin/Updateorder/',idOrder]);
}


deleteorder(idOrder :number)
{
this.ph.deleteorder(idOrder).subscribe(
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
