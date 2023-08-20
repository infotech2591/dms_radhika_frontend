import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    const token = localStorage.getItem('isLoggedIn')
    if(token == 'true')
    {
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
  
}
