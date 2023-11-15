import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import {AuthenticatedService} from "../services/authenticated.service";
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn:"root"
})
export class authenticationGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let authenticated=  this.authService.isAuthenticated;
   if (authenticated==false){
     this.router.navigateByUrl("/login");
     return false;
   }
   else {
     return true;
   }

  }

}











//
// constructor(private authService:AuthenticatedService,private router:Router) {
// }
// canActivate(route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   let authenticated=  this.authService.isAuthenticated();
//   if (authenticated==false){
//     this.router.navigateByUrl("/login");
//     return false;
//   }
//   else {
//     return true;
//   }
//
// }

