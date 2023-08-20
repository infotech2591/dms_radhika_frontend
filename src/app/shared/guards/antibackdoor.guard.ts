import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntibackdoorGuard implements CanActivate {
  constructor(
    private router : Router,
  ){

  }
  canActivate() {
    const token = localStorage.getItem('isLoggedIn')
    if(token == 'true'){
      this.router.navigate(["/dashboard"]);
      return false;
    }else{
      return true;
    }

  }
  
}