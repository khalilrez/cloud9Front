import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent {
  email: string ="";
  code: string ="";
  password: string ="";

  constructor(private router: Router,private http: HttpClient  ) { }

  resetDone(){
    console.log(this.email);
    console.log(this.code);
    
    let bodyData = {
      email: this.email,
      code: this.code,
    };

    this.http.post("http://localhost:8075/api/auth/resetPassword", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);

     
      this.router.navigateByUrl("/home");
     

    });
 
  }
}
