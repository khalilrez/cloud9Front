import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api = "http://localhost:8075/api"

  constructor(private http: HttpClient) { }
  getorderList(): Observable<object> {  
    return this.http.get(`${this.api}`+'orders');  
  }  

  deleteorders(id: any): Observable<any> {  
    return this.http.delete(`${this.api}/delete/${id}`, { responseType: 'text' });  
  }  


 
}
