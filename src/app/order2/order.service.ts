import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api = "http://localhost:8075/api/orders"

  constructor(private http: HttpClient) { }
 order:  Order;
  getorderList(): Observable<Order[]> {  
    return this.http.get<Order[]>(`${this.api}`);  
  }  

  addorder(order: Order):Observable<Object>
  {
return this.http.post(`${this.api}/add`,order);

  }

  getorder(idOrder: number):Observable<Order>
  {
return this.http.get<Order>(`${this.api}/$(idOrder)`);
  }

  updateorder(idOrder: number, order: Order): Observable<Object>{
    return this.http.put(`${this.api}/${idOrder}`,order);
  }

  deleteorder(idOrder: number): Observable<Object> {  
    return this.http.delete(`${this.api}/delete/${idOrder}`);

  }  


 
}
