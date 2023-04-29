import { Component } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent {
  roles: string[] = [];
  isLoggedIn = false;
  user = this.Storage.getUser();
  constructor(private Storage: TokenStorageService,private router: Router) { }


  ngOnInit(): void {

  
    this.isLoggedIn = this.Storage.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.Storage.getUser();
      this.roles = user.roles;


  }

}

}
