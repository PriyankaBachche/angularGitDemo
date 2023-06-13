import { Component } from '@angular/core';
import { LoginUserService } from '../services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private loggedIn:LoginUserService){}
  flag:boolean=true;
  setFlag(){
    this.loggedIn.isUserLoggedIn();
  }

}
