import { Component } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user.model';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent {
  user? : User ;
  constructor(private router: Router,private http: HttpClient,private actRoute: ActivatedRoute  ) { }
  ngOnInit(): void{
  let id = this.actRoute.snapshot.paramMap.get('id');
  

    this.http.get(`http://localhost:8075/api/auth/getDoctorById/${id}`).subscribe((resultData: any)=>{
      console.log(resultData);
      this.user = resultData;
           
   
     

    });
  }

}
