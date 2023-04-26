import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string ="";
  email: string ="";
  password: string ="";

  constructor(private router: Router,private http: HttpClient  ) { }
  showSignUp() {
    document.getElementById('container')!.classList.add("right-panel-active");
  }

  showSignIn() {
    document.getElementById('container')!.classList.remove("right-panel-active");
  }


  loginUser(){
    console.log(this.username);
    console.log(this.password);
    
    let bodyData = {
      username: this.username,
      password: this.password,
    };

    this.http.post("http://localhost:8075/api/auth/signin", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);

     
      this.router.navigateByUrl("/home");
     

    });
 
  }





  save() {
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    }

    this.http.post("http://localhost:8075/api/auth/signup", bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
     

    });
      

  }
}
