import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pharmacy } from '../pharmacydisplay/Pharmacy';
import { Observable } from 'rxjs';
import { Percentage } from '../models pharmacy order percentage/Percentage';
import { map } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  api = "http://localhost:8075/api/PharamcyLocation"
  //map="http://localhost:8075/api/map"
  char = "http://localhost:8075/api/PharamcyLocation/percentage"
  constructor(private http: HttpClient) { }
  pharmacy: Pharmacy =new Pharmacy();
  getPharmacyList(): Observable<Pharmacy[]> {  
    return this.http.get<Pharmacy[]>(`${this.api}`);  
   
  }  

  addPharmacy(pharmacy: Pharmacy):Observable<Object>
  {
return this.http.post(`${this.api}`,pharmacy);

  }

  getpharamcybyid(idLocation: number):Observable<Pharmacy>
  {
return this.http.get<Pharmacy>(`${this.api}/$(idLocation)`);
  }

  updatepharamcy(idLocation: number, pharmacy: Pharmacy): Observable<Object>{
    return this.http.put(`${this.api}/${idLocation}`,pharmacy);
  }
  deletepharm(idLocation: number): Observable<Object> {  
    return this.http.delete(`${this.api}/deleteph/${idLocation}`);

  }  
gettype():Observable<Percentage[]>{

  return this.http.get<Percentage[]>(`${this.char}`);  



}

}
