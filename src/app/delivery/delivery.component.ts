import { Component } from '@angular/core';
import { DeliveryService } from '../service/delivery.service';
import { Delivery } from '../model/delivery';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  constructor(private deliveryService: DeliveryService) { }
  listdelivery= this.deliveryService.listDelivey;
  
  ngOnInit() {
    this.deliveryService.getDeliverys().subscribe(data => {
      this.listdelivery = data;
    });
  }

  addDelivery(){
    var fullname:any=document.getElementById("add-user-fullname") as HTMLElement;
    var addr:any=document.getElementById("add-user-company") as HTMLElement;

    let d = new Delivery(0,fullname.value,addr.value,new Date());
    this.deliveryService.addDelivery(d).subscribe(res => {
        window.location.reload()
    });
  }

  deleteDelivery(id: any) {
    console.log(id); // Check the value of livraison

    this.deliveryService.deleteDeliveryById(id)
        .subscribe(res => {
          
            console.log("deleteddd");
            window.location.reload(); // Reload the page after the delete
        });
}
}
