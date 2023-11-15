import {Component, OnInit} from '@angular/core';
import {Demande} from "../model/Demande.model";
import {Offre} from "../model/Offre.model";
import {Candidat} from "../model/Candidat.model";
import {OffreService} from "../services/offre.service";

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit{
  Listes_Demandes:Demande[]=[]
  constructor(private offreService:OffreService){}
  ngOnInit(): void {

    this.offreService.getDemades().subscribe({
      next:(data)=>{
        this.Listes_Demandes=data;

        for (let demande of data){
          demande.candidat.url="http://localhost:8085/"+demande.candidat.id_Candidat+"/cv"
          this.offreService.getStatusCandidat(demande.offre.offre_id,demande.candidat.id_Candidat).subscribe({
            next:(data:any)=>{

              demande.status=data.status

            },
            error:err => {
              console.log(err)
            }
          })
        }



      }
    })
  }

}
