export class  Delivery{
    idDelivery! : number ;
    customerName!: String;
    customerAddress!: String;
    deliveryDate!: Date;

    constructor(id:number,customer:string,addr:string,deliveryDate:Date){
      this.idDelivery = id;
      this.customerAddress = addr;
      this.deliveryDate = deliveryDate;
      this.customerName = customer;
    }

  
  }