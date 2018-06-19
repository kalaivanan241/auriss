import { LoginService } from './../services/login.service';
import { HomeService } from './../services/home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;
  schedules$;
  constructor(private router: Router,
     private homeService: HomeService,
     private loginService: LoginService) {
       if (loginService.isUserLogged()) {
      this.user = loginService.loggedUser();
       }
  }

  ngOnInit() {
    this.schedules$ = this.homeService.getSchedules(this.user);
  }

  logout() {
    this.loginService.logoutUser();
    this.router.navigate(['login']);
  }



}
