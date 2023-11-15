import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OffreService} from "../../services/offre.service";
import {Candidat} from "../../model/Candidat.model";
import {ActivatedRoute, Router} from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit{
  // addCandidatForm!:FormGroup;
  candidat:Candidat = new Candidat();
  cvFile:File|null=null;
  id_offre!:number
  titleOffre!: string
  constructor(private fb:FormBuilder,
              private offreService:OffreService,
              private route:ActivatedRoute,
              private router:Router,
              private toastrService : ToastrService) {
    this.id_offre=this.route.snapshot.params['id']

  }
   idCandidatControle= new FormControl(null,[Validators.pattern('^[0-9]{8}$')])
  ngOnInit(): void {
    // this.addCandidatForm=this.fb.group({
    //   id_Candidat:this.fb.control(null,[Validators.required,Validators.pattern('^[0-9]{8}$')]),
    //   nom:this.fb.control(null,Validators.required),
    //   email:this.fb.control(null,[Validators.required,Validators.email]),
    //   cv:this.fb.control(null)
    //
    // })
    this.offreService.getOffre(this.id_offre).subscribe({
      next:(data)=>{
        this.titleOffre=data.title;
      }
    })

  }

  addNewCandidat() {
  if (this.cvFile){
    this.offreService.addCandidat(this.candidat,this.cvFile,this.id_offre).subscribe((response)=>{
      this.toastrService.success(`vous avez postulé sur l'offre ${this.titleOffre}`)
      this.router.navigateByUrl("/")
    })
  }
  }



    // addNewCandidat() {
    // this.offreService.addCandidat(this.addCandidatForm.value).subscribe({
    //   next:(data)=>{
    //     console.log(data)
    //     alert("candidat ajouté ")
    //   },
    //   error:(err)=>{
    //     console.log(err)
    //
    //   }
    // })
    //
    // }

  onCvFileSelected(event: any) {
   this.cvFile=event.target.files[0];

  }
  // onCvFileSelected(event: Event) {
  //   const inputElement=event.target as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0){
  //     const  cvFile=inputElement.files[0];
  //     const cvBlob=new Blob([cvFile],{ type:cvFile.type})
  //     this.addCandidatForm.get('cv')?.setValue(cvBlob);
  //   }
  //
  // }
}
