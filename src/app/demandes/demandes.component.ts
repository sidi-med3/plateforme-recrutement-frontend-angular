import {Component, OnInit} from '@angular/core';
import {OffreService} from "../services/offre.service";
import {Demande} from "../model/Demande.model";
import {Offre} from "../model/Offre.model";
import {Candidat} from "../model/Candidat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit{
  Listes_Demandes:Demande[]=[]
  Liste_Demandes_By_Offres:Demande[]=[]
  Listes_Offres:Offre[]=[]
  Liste_Candidat:Candidat[]=[]
  id_Offre!:number;
  constructor(private offreService:OffreService,
              private toastrService:ToastrService){
  }
  ngOnInit(): void {
    this.offreService.getDemades().subscribe({
      next:(data)=>{
        this.Listes_Demandes=data;

        for (let demande of data){
          demande.candidat.url="http://localhost:8085/"+demande.candidat.id_Candidat+"/cv"
          this.offreService.getStatusCandidat(demande.offre.offre_id,demande.candidat.id_Candidat).subscribe({
            next:(data:any)=>{
              demande.status=data.status
              console.log(demande.candidat.nom+" et "+data.status)

            },
            error:err => {
              console.log(err)
            }
          })
        }



      }
    })
  }


  deletCandidat(id:string){
    this.offreService.deletCandidat(id).subscribe({
      next: (data)=>{
        this.toastrService.success("Candidat supprimé")
      }
    })
  }
}
