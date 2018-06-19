import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  error = '';
  constructor(private login: LoginService, private router: Router) {

  }

  ngOnInit() {
  }

  submit(f: FormGroup) {
    this.error = '';
    if (f.valid) {
    this.login.loginUser(f.value).subscribe(
      (res: any) => {
      this.user = res.username;
      this.login.login(res.token, this.user);
      this.router.navigate(['']);
    },
    err => {
      console.log(err.error);
      this.error = err.error;
    });
    }
  }

}
