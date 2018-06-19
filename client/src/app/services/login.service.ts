import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient) {

  }

  public loginUser(userDetail) {
    return this.http.post('http://localhost:3000/api/user/login', userDetail, this.httpOptions);
  }

  public login(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

  public logoutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public isUserLogged() {
    return ( localStorage.getItem('user') &&  localStorage.getItem('token') );
  }

  public userLogged() {
    return (localStorage.getItem('user') && (localStorage.getItem('user') === 'abcd'));
  }

  public loggedUser() {
    return localStorage.getItem('user');
  }
}
