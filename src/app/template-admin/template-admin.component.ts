import {Component, OnInit} from '@angular/core';
import {AuthenticatedService} from "../services/authenticated.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.css']
})
export class TemplateAdminComponent implements OnInit{
constructor(public auth:AuthService,private router:Router) {
}
ngOnInit(): void {
  }
  mehtodeLogout() {
this.auth.logout().subscribe({
  next:(data)=>{
    this.router.navigateByUrl("/login");
  }})
  }
}




// constructor(public auth:AuthenticatedService,private router:Router) {
// }
// ngOnInit(): void {
// }
// mehtodeLogout() {
//   this.auth.logout().subscribe({
//     next:(data)=>{
//       this.router.navigateByUrl("/login");
//     }})
// }
