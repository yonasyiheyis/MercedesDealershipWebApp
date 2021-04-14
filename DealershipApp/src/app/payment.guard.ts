import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.service.isAuthenticated()) {
      const diff = parseInt(localStorage.getItem('clicked')) - parseInt(localStorage.getItem('visited'))
      console.log("This is the diff: " + diff)
      if (diff == 1) {
        return true
      } else {
        this.router.navigate(['view'])
        return false;
      }
    } else {
      this.router.navigate(['login'])
      return false;
    }

  }

}
