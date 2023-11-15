import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffreService} from "../services/offre.service";
import {Demande} from "../model/Demande.model";

@Component({
  selector: 'app-demandes-offre',
  templateUrl: './demandes-offre.component.html',
  styleUrls: ['./demandes-offre.component.css']
})
export class DemandesOffreComponent implements OnInit {
  id_Offre!: number
  Listes_Demandes:Demande[]=[]

  constructor(private offreService: OffreService,
              private route: ActivatedRoute) {
    this.id_Offre = route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.offreService.getDemandeByOffre(this.id_Offre).subscribe({
      next: (data) => {
        this.Listes_Demandes=data;

        for (let demande of data) {
          demande.candidat.url = "http://localhost:8085/" + demande.candidat.id_Candidat + "/cv"
          this.offreService.getStatusCandidat(demande.offre.offre_id, demande.candidat.id_Candidat).subscribe({
            next: (data: any) => {
              demande.status = data.status
              console.log(demande.candidat.nom + " et " + data.status)

            },
            error: err => {
              console.log(err)
            }
          })
        }
      }

    })

  }

}
