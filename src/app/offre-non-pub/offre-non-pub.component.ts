import {Component, OnInit} from '@angular/core';
import {OffreService} from "../services/offre.service";
import {Offre} from "../model/Offre.model";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offre-non-pub',
  templateUrl: './offre-non-pub.component.html',
  styleUrls: ['./offre-non-pub.component.css']
})
export class OffreNonPubComponent implements OnInit{
  Listes_Offres_non_Pub:Offre[]=[]
  constructor(private offreService:OffreService,private route:Router) {
  }
  ngOnInit(): void {
    this.offreService.getAllOffresNonPub().subscribe({
      next:(offres)=>{
        this.Listes_Offres_non_Pub=offres;
      }
    })


  }


  detailOffre(offre_id: number) {
    this.route.navigate(['/admin/detail-offre/'+offre_id])
  }

  publOffre(id: number) {
    this.offreService.pubOffre(id).subscribe({
      next:(data)=>{
        console.log("offre publié");
      }
    })

  }
}
