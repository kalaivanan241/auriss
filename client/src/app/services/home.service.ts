import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HomeService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
    //  'x-auth-token': localStorage.getItem('token'    )
    })
  };
  constructor(private http: HttpClient) {

  }

  getSchedules(username) {
    return this.http.get('http://localhost:3000/api/schedule', this.httpOptions);
  }

  addSchedule(schedule) {
    return this.http.post('http://localhost:3000/api/schedule', schedule, this.httpOptions);
  }




}
