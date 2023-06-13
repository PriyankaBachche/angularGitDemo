import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from '../services/login-user.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  constructor(private login:LoginUserService, private router:Router){}
  canActivateChild(
    
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.login.isUserLoggedIn()){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false;
      }
  }
  
}
