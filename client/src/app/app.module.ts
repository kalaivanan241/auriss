import { ScheduleGuard } from './services/schedule-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { HomeService } from './services/home.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { DateStringPipe } from './date-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddScheduleComponent,
    DateStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'add-schedule', component: AddScheduleComponent, canActivate: [AuthGuard, ScheduleGuard]}
    ])
  ],
  providers: [
    LoginService,
    AuthGuard,
    ScheduleGuard,
    HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
