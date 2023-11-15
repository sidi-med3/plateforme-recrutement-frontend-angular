import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OffreService} from "../services/offre.service";
import {Offre} from "../model/Offre.model";
import {of} from "rxjs";
import {Skills} from "../model/Skills.model";
import {offres_skills} from "../model/offres_skills.model";
import {offres_certifs} from "../model/offres_certifs.model";
import {AuthenticatedService} from "../services/authenticated.service";
import {DemandesComponent} from "../demandes/demandes.component";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit {
  idOffre!: number
  offre!: Offre
  skills!:string[]
  offresSkills!:offres_skills[]
  offresCertifs!:offres_certifs[]
    demade!:DemandesComponent
    nombreDemande!:number
  constructor(private rout: ActivatedRoute,
              private offreservice: OffreService,
              private router:Router,
              public authService:AuthService
            ) {
    this.idOffre = rout.snapshot.params['id']
  }

  ngOnInit(): void {

    this.offreservice.getOffre(this.idOffre).subscribe(
      {
        next: (data) => {
          this.offre = data
          console.log(data)
        }
      })
  //   this.offresSkills=this.offre.offres_skills
  // // @ts-ignore
  //   for (let offreskl:offres_skills of this.offresSkills){
  //      this.skills.push(offreskl.skills_nom_skill)
  //
this.offreservice.getOffres_skills(this.idOffre).subscribe({
  next:(data)=>{
    for (let offreskl of data){
      this.offresSkills=data

    }

     }

})
    this.offreservice.getOffres_certifs(this.idOffre).subscribe({
      next:(data)=>{
        this.offresCertifs=data
      }
    })
      this.offreservice.getNombreDemandes(this.idOffre).subscribe({
          next:(data)=>{
              this.nombreDemande = data
          }
      })
 }


  updateOffre(offre_id: number) {
    this.router.navigateByUrl('admin/update-offre/'+offre_id)
  }

  deleteOffre(offre_id: number) {
    this.offreservice.deleteOffre(offre_id).subscribe({next:(data)=>{
      alert("Etes-vous sûr de vouloir supprimer cet ?")
        this.router.navigateByUrl("admin/offres")
      }})
  }

  postuler(offre_id: number) {
     this.router.navigateByUrl('add-candidat/'+offre_id)
  }

    consulterDemandes(offre_id: number) {
    // this.demasee.consulterDemandes(offre_id)
        this.router.navigateByUrl('admin/demandes_offre/'+offre_id)
    }

    getNombreDemandes(offre_id: number) {
      this.offreservice.getNombreDemandes(offre_id).subscribe({
          next:(data)=>{
              this.nombreDemande = data
          }
      })

    }
}











// idOffre!: number
// offre!: Offre
// skills!:string[]
// offresSkills!:offres_skills[]
// offresCertifs!:offres_certifs[]
// demade!:DemandesComponent
// nombreDemande!:number
// constructor(private rout: ActivatedRoute,
//   private offreservice: OffreService,
//   private router:Router,
//   public authService:AuthenticatedService,
// ) {
//   this.idOffre = rout.snapshot.params['id']
// }
//
// ngOnInit(): void {
//
//   this.offreservice.getOffre(this.idOffre).subscribe(
//     {
//       next: (data) => {
//         this.offre = data
//         console.log(data)
//       }
//     })
//   //   this.offresSkills=this.offre.offres_skills
//   // // @ts-ignore
//   //   for (let offreskl:offres_skills of this.offresSkills){
//   //      this.skills.push(offreskl.skills_nom_skill)
//   //
//   this.offreservice.getOffres_skills(this.idOffre).subscribe({
//     next:(data)=>{
//       for (let offreskl of data){
//         this.offresSkills=data
//
//       }
//
//     }
//
//   })
//   this.offreservice.getOffres_certifs(this.idOffre).subscribe({
//     next:(data)=>{
//       this.offresCertifs=data
//     }
//   })
//   this.offreservice.getNombreDemandes(this.idOffre).subscribe({
//     next:(data)=>{
//       this.nombreDemande = data
//     }
//   })
// }
//
//
// updateOffre(offre_id: number) {
//   this.router.navigateByUrl('admin/update-offre/'+offre_id)
// }
//
// deleteOffre(offre_id: number) {
//   this.offreservice.deleteOffre(offre_id).subscribe({next:(data)=>{
//       alert("Etes-vous sûr de vouloir supprimer cet ?")
//       this.router.navigateByUrl("admin/offres")
//     }})
// }
//
// postuler(offre_id: number) {
//   this.router.navigateByUrl('add-candidat/'+offre_id)
// }
//
// consulterDemandes(offre_id: number) {
//   // this.demasee.consulterDemandes(offre_id)
//   this.router.navigateByUrl('admin/demandes_offre/'+offre_id)
// }
//
// getNombreDemandes(offre_id: number) {
//   this.offreservice.getNombreDemandes(offre_id).subscribe({
//     next:(data)=>{
//       this.nombreDemande = data
//     }
//   })
//
// }
