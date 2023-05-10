import { Component, } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private storageService: TokenStorageService, private router: Router){
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {


        const user = this.storageService.getUser();
        console.log(user);
        const roleeee =user.roles[0];

        if (user && roleeee  === 'ROLE_DOCTOR' && ev.url.includes('/admin') || user && roleeee  === 'ROLE_PATIENT' && ev.url.includes('/admin') ) {
          console.log("hh");

          this.router.navigate(['/home']);
      }

  }


})}
}
