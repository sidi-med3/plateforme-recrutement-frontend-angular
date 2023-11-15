import { Injectable } from '@angular/core';
import {AppUser} from "../model/user.model";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
users:AppUser[]=[];
auhtenticatedUser:AppUser | undefined
  constructor() {
    this.users.push({userId:"user12345" ,username :"user1",password:"1234",roles:["USER"]});
    this.users.push({userId:"user13579" ,username :"user2",password:"1234",roles:["USER"]});
    this.users.push({userId:"user14710" ,username :"admin",password:"1234",roles:["USER","ADMIN"]});
  }
  public login(username:string,password:string):Observable<AppUser>{
    let appUser=this.users.find(u=>u.username==username);
    if (!appUser) return throwError(()=>new Error("User is not found"))
    if (appUser.password!=password){
      return throwError(()=>new Error("Bad credential"))
    }
    return of(appUser)

  }
  public authenticateUser(appUser: AppUser):Observable<boolean>{
  this.auhtenticatedUser=appUser;
    localStorage.setItem("authUser",JSON.stringify({username:appUser.username,roles:appUser.roles,jwt:"JWT_TOKEN"}));
return of(true)  ;
}
public hasRole(role:string):boolean{
  return this.auhtenticatedUser!.roles.includes(role);
}
public isAuthenticated(){
  return this.auhtenticatedUser!=undefined;
}
public logout():Observable<boolean>{
  this.auhtenticatedUser=undefined;
  localStorage.removeItem("authUser");
  return of(true)
}
}
