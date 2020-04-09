import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router}  from '@angular/router'
import {ServiceService} from '../app/service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private apiservice: ServiceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.apiservice.isLoggedIn()){
        this.router.navigateByUrl('/login');
        this.apiservice.deleteToken();
      }
    return true;
    this.router.navigate(['/login']);
    return false;
  }
  
}
