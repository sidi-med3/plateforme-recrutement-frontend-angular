import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffreService} from "../services/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offre} from "../model/Offre.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit{
  updateFormGroup!:FormGroup
  offreId!:number
  offre!:Offre
  updateSkillsOffreFormGroup:FormGroup[]=[];
  constructor(private fb:FormBuilder,
              private offreService:OffreService,
              private route:ActivatedRoute,
              private router:Router,
              private toastrService:ToastrService) {
    this.offreId=this.route.snapshot.params['id']

  }
  ngOnInit(): void {
    this.offreService.getOffre(this.offreId).subscribe({
      next:(data)=>{
        this.offre=data

        this.updateFormGroup=this.fb.group({
          title:this.fb.control(this.offre.title,Validators.required),
          date_offre:this.fb.control(this.offre.date_offre),
          publication:this.fb.control(this.offre.publication),
          description:this.fb.control(this.offre.description,Validators.required)}
        )
        console.log(data)

      }
    })
    for (let i=0;i<3;i++){
      let formGroup:FormGroup=new FormGroup({
        nom_Skill:this.fb.control(null)
      })
     this.updateSkillsOffreFormGroup.push(formGroup)
    }

  }

  updateOffre(id:number) {
    this.offreService.updateOffre(id,this.updateFormGroup.value).subscribe({
      next:(data)=>{
        console.log("l'offre modifiee")
         this.toastrService.success("Vous avez modifié l'offre","Modification de L'offre",
           {timeOut : 3000})
        this.router.navigateByUrl("/admin/detail-offre/"+id)

      }
    })
  }
}
