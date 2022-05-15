import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { login } from 'src/app/_helper/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userSub: Subscription;
  public authenticated=false;
  public user: login;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.userSub = this.authenticationService.currentUserSubject.subscribe(user => {
      this.authenticated = !!user;
      this.user = user;
     });
  }

  logoutUser() {
    this.authenticationService.logout();
  }
  ngOnDestroy(): void {

    this.userSub.unsubscribe();
  }

}
