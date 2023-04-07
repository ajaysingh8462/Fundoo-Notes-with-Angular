import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardnameGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardServiceService, private router: Router){}
  canActivate(): boolean {  
    if (localStorage.getItem('token') === null) {  
        this.router.navigateByUrl("/login");        
    }  
    return this.Authguardservice.gettoken(); 
     
}  
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
 
}
