import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  constructor( private location: Location, private homeService: HomeService) { }

  ngOnInit() {

  }

  back() {
  this.location.back();
  }

  submit(f) {
    if (f.valid) {
      const date = f.value.date;
      const time = f.value.time;
      // converting IST to GMT
      const dateTime = new Date(date.year, date.month, date.day, time.hour, time.minute, 0, 0);
      // dateTime is converted to GMT

      const schedule = { scheduler: localStorage.getItem('user'),
                        time: dateTime.toUTCString(),
                        appointmentWith: f.value.appointmentWith};
      console.log(schedule);

      this.homeService.addSchedule(schedule).subscribe(
        res => {this.location.back(); },
        err => console.log('error occured'));
    }
  }

}
