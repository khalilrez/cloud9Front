import { Component } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent {
  roles: string[] = [];
  isLoggedIn = false;
  user = this.Storage.getUser();
  selectedFile: File = new File([], '')
  idUser = this.user.id;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = "";
  imageName: any = " ";
  user1 = new User();

  constructor(private Storage: TokenStorageService, private router: Router, private httpClient: HttpClient,private storageService: TokenStorageService) { }
  public onFileChanged(event: any) {

    var reader = new FileReader();
    reader.onload =  ()  => {
      var output :any  = document.getElementById('user_image');
      output.src = reader.result;
      this.imageName = reader.result!.toString();

      //document.getElementById('update-image-container').style.display = 'flex';
      //document.getElementById('update-image-container').style.justifyContent = 'center' ;
    }
    reader.readAsDataURL(event.target.files[0]);

  }
  
  save(): void {
    const user = new User();
    user.imageProfile= this.imageName;
    user.email="";
    user.password="";
    user.phonenumber="";
    user.username="mayssoun";
    user.isverified=1;
    

    console.log(user);
    this.httpClient.put(`http://localhost:8075/api/auth/update/${this.idUser}`, user ).subscribe((resultData: any)=>{
      console.log(resultData);     
      this.storageService.saveUser(resultData);
    });
 

    
  }
  ngOnInit(): void {
    this.isLoggedIn = this.Storage.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.Storage.getUser();
      this.roles = user.roles;
    }
    this.imageName= this.user.imageProfile;

  }

}
