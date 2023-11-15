import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffreService} from "../services/offre.service";
import {Offre} from "../model/Offre.model";


// @ts-ignore
@Component({
  selector: 'app-add-new-offre',
  templateUrl: './add-new-offre.component.html',
  styleUrls: ['./add-new-offre.component.css']
})
export class AddNewOffreComponent implements OnInit{
  newOffreFormGroup!:FormGroup;
  newSkillsOffreFormGroup!:FormGroup;
  newCertOffreFromGroup!:FormGroup;
  premiereForm=false
  deuxiemForm =false
  troisiemForm = false

 constructor(private fb:FormBuilder,private offreService:OffreService) {}
  ngOnInit(): void {
   this.newOffreFormGroup=this.fb.group({
     title  :this.fb.control(null,[Validators.required]),
     date_offre:this.fb.control(new Date()),
     publication:this.fb.control(false),
     description:this.fb.control(null,[Validators.required])
   })
    this.newSkillsOffreFormGroup=this.fb.group({
      nom_Skill:this.fb.control(null,Validators.required),
    })
    this.newCertOffreFromGroup=this.fb.group({
      nom_certif:this.fb.control(null,Validators.required)
    })
  }

  addNewOffre() {
   let offre=this.newOffreFormGroup.value;
   console.log(offre)
   this.offreService.saveOffre(offre).subscribe({
     next:(data)=>{
       alert(offre.date_offre)
       this.premiereForm=true

     } ,error:err=>{
       console.log(err)
    }
   })

  }

  addNewSkiilsOffre() {
     this.offreService.getIdOffre().subscribe({
       next:(data)=>{
         let skills=this.newSkillsOffreFormGroup.value
         this.offreService.saveSkills_offres(skills,data).subscribe({
           next:(data)=>{


           }
         });

         // this.offreService.saveSkills_offres(skills,data).subscribe({
         //   next:(data)=>{
         //     alert("ajout de skills ....")
         //   },error :err => {
         //     console.log("err1 :"+err);
         //   }
         // })
         },
       error:err => {
         console.log("err2 "+err)
       }
     })



  }

  incrementFunc() {
    this.troisiemForm=true
    this.deuxiemForm=true
  }

  addNewCertif() {
    this.offreService.getIdOffre().subscribe({
      next:(data)=>{
        let certif=this.newCertOffreFromGroup.value
        this.offreService.saveCertifs_offres(certif,data).subscribe({
          next:data=>{

          }
        })
      }
    })
  }
}
