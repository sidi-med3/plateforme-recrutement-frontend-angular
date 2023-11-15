import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated : boolean = false;
roles : any
username : any;
accessToken :any;

  constructor(private http:HttpClient) { }
  public login(username:string,password:string) {
    let options = {
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params = new HttpParams()
      .set('username',username).set('password',password);
    return this.http.post("http://localhost:8085/auth/login",params,options)
  }

  loadProfile(appUser: any) {
    this.isAuthenticated=true
    this.accessToken = appUser['Access-token']
    let decodeJwt:any = jwtDecode(this.accessToken);
    this.username = decodeJwt.sub;
    this.roles = decodeJwt.scope;

  }

  logout(){
    this.isAuthenticated=false
    this.accessToken=undefined
    this.username=undefined
    this.roles=undefined
    return of(true)

  }
}
