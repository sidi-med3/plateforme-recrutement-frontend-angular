import {Component, OnInit} from '@angular/core';
import {OffreService} from "../services/offre.service";
import {Offre} from "../model/Offre.model";
import {Router} from "@angular/router";
import {authenticationGuard} from "../guards/authentication.guard";
import {AuthenticatedService} from "../services/authenticated.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit{
  offres!:Array<Offre>
  constructor(private offreservice:OffreService,private router:Router,public authService:AuthService) {
  }
  ngOnInit(): void {
    this.offreservice.getAllOffres().subscribe({
      next:(data)=>{
       this.offres=data

      }
    })

  }
  detailOffre(off:Offre){
       // this.router.navigateByUrl("detail-offre/"+off.offre_id);
        this.router.navigate(['/detail-offre/'+off.offre_id+"/"])

  }


}
