import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
loginUser:boolean=false;
  constructor() { }
  isUserLoggedIn(){
    //logic

    return this.loginUser;
  }
}
