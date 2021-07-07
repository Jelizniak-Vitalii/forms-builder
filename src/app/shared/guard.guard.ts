import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router } from '@angular/router';
import { Observable } from 'rxjs';

import {  ServiceAuthentication } from './services/serviceAuthentication'


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {






  constructor( 
    private router: Router,
    private serviceCurrentUser: ServiceAuthentication
    ){}

  


  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      const user = this.serviceCurrentUser.data$.subscribe((x) => {console.log(x);})
      // console.log(user)
      if(user) {
        return true;
      }
        this.router.navigate(['/title'])
    return false;
  }
  
}
