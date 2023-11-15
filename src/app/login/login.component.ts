import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticatedService} from "../services/authenticated.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userFormGroup!: FormGroup;
  errorMessage:any;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) {
  }
  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  handleLogin() {
    let username=this.userFormGroup.value.username
    let password=this.userFormGroup.value.password
    this.authService.login(username,password).subscribe({
      next:appUser=>{
        this.authService.loadProfile(appUser)
      this.router.navigateByUrl("/admin")
      },
      error:(err)=>{
        this.errorMessage=err;

      }
    })

  }
}






















//
// userFormGroup!: FormGroup;
// errorMessage:any;
// constructor(private fb:FormBuilder,private authService:AuthenticatedService,private router:Router) {
// }
// ngOnInit(): void {
//   this.userFormGroup=this.fb.group({
//     username : this.fb.control(""),
//     password : this.fb.control("")
//   })
// }
//
// handleLogin() {
//   let username=this.userFormGroup.value.username
//   let password=this.userFormGroup.value.password
//   this.authService.login(username,password).subscribe({
//     next:(appUser)=>{
//       this.authService.authenticateUser(appUser).subscribe({
//         next:(data)=>{
//           this.router.navigateByUrl("/admin")
//
//         }
//       });
//     },
//     error:(err)=>{
//       this.errorMessage=err;
//
//     }
//   })
//
// }
