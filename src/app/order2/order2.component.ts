import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';
import { Order } from './order';

@Component({
  
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css']
})
export class Order2Component implements OnInit {
  liste:any;
  term: string = ''; 
os:OrderService;
id:number;

orderToUpdate = {
  idOrder:"",
  orderItems:"",
  qte:"",
  status:"",
  totalprice:""

}
x : Order=new Order();  

  op: string = ''; 
  deleteMessage=false;  

  ch: string = ''; 
  orderdetail = null as any;
  constructor(private http:HttpClient){}
ngOnInit() {
  let response=this.http.get("http://localhost:8075/api/orders");
  response.subscribe((data)=>this.liste=data);
 
}

deleteorders(id: any) {  
  this.os.deleteorders(id)  
    .subscribe(  
      data => {  
        console.log(data);  
        this.deleteMessage=true;  
        this.os.getorderList().subscribe(data =>{  
          this.liste=data  
          })  
      },  
      error => console.log(error));  
}  

}
