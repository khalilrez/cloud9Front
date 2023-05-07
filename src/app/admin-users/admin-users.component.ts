
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  constructor(private router: Router,private http: HttpClient,private toastr: ToastrService ) { }
  roles: string[] = [];

  username: string ="";
  email: string ="";
  password: string ="";
  isoptionsDisplayed = false; 
  showOptions(){
    this.isoptionsDisplayed = !this.isoptionsDisplayed
    console.log(this.isoptionsDisplayed);
  }
   listUsers:any = [];

  getAllUsers(){
    this.http.get("http://localhost:8075/api/auth/getAll").subscribe((resultData)=>{
    

this.listUsers = resultData;
console.log(this.listUsers);


    });
  }

  changeRole(e : any) {
    this.roles=[e.target.value];
      }
    

  ngOnInit(): void {
    this.getAllUsers();
    
    
  }

  save() {
    let roles = new Set<string>();

    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password,
      "role":this.roles
    }


    this.http.post("http://localhost:8075/api/auth/signup", bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      this.toastr.success('User added Successfully', 'Well done',{timeOut: 3000});

     window.location.reload();
    });
      

  }

  deleteUser(id : number): void {
    console.log(id);
    this.http.delete(`http://localhost:8075/api/auth/delete/${id}`).subscribe((resultData)=>{
      this.toastr.success('User deleted Successfully', 'Well done',{timeOut: 3000});
      window.location.reload();

      
      
    })

  }


}
