import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Offre} from "../model/Offre.model";
import {Observable, of} from "rxjs";
import {Skills} from "../model/Skills.model";
import {offres_skills} from "../model/offres_skills.model";
import {Certif} from "../model/Certif.model";
import {offres_certifs} from "../model/offres_certifs.model";
import {Candidat} from "../model/Candidat.model";
import {Validators} from "@angular/forms";
import {Demande} from "../model/Demande.model";

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }
  public saveOffre(offre:Offre):Observable<Offre>{
     return  this.http.post<Offre>("http://localhost:8085/offre",offre);
  }
  public getIdOffre(){
    return this.http.get<number>("http://localhost:8085/id_offre");
  }
  public saveSkills_offres(skills:Skills,id:number){
    return this.http.post<offres_skills>("http://localhost:8085/offre-skills/"+id,skills)

  }
  public saveCertifs_offres(certif: Certif,id:number){
    return this.http.post<offres_certifs>("http://localhost:8085/offre-certifs/"+id,certif)

  }
  public getAllOffres(){
    return this.http.get<Array<Offre>>("http://localhost:8085/offres")
  }
  public  getOffre(id:number){
      return this.http.get<Offre>("http://localhost:8085/offre/"+id)
  }
  public getOffres_skills(id:number){
    return this.http.get<Array<offres_skills>>("http://localhost:8085/offres_skills/"+id)
  }
  public getOffres_certifs(id:number){
    return this.http.get<Array<offres_certifs>>("http://localhost:8085/offres_certifs/"+id)
  }
  public updateOffre(id:number,offre:Offre){
    return this.http.put<Offre>("http://localhost:8085/update_offre/"+id,offre);
   // return this.http.post<Offre>("http://localhost:8085/update_offre/"+id)
   // return this.http.put(")
  }
  public deleteOffre(id:number){
    return this.http.delete("http://localhost:8085/delete_offre/"+id)
  }
  public addCandidat(candidat:Candidat,cvFile:File,id:number):Observable<any>{
    const formData=new FormData();
    formData.append('id_Candidat',candidat.id_Candidat.toString())
    formData.append('nom',candidat.nom);
    formData.append('email',candidat.email)
    formData.append('cv',cvFile);
    return this.http.post("http://localhost:8085/saveCandidat/"+id, formData)
  }
  public getAllOffresNonPub(){
    return this.http.get<Array<Offre>>("http://localhost:8085/Listes_Offres_Non_Publiés")
  }
  public pubOffre(id:number){
    return this.http.put<any>("http://localhost:8085/publierOffre/"+id,null);
  }
  public getDemades(){
    return this.http.get<Array<Demande>>("http://localhost:8085/Listes_Demandes")
  }
  public getCvCandidat(id_candidat:string){
    return this.http.get("http://localhost:8085/"+id_candidat+"/cv")
  }
  public extractCV(id:string){
    return this.http.get("http://localhost:8085/"+id+"/extractCV");

  }
  public  getStatusCandidat(id_offre:number,id_candidat:string){
    return this.http.get("http://localhost:8085/"+id_offre+"/"+id_candidat+"/status");

  }
  public getDemandeByOffre(id_offre:number){
    return this.http.get<Array<Demande>>("http://localhost:8085/"+id_offre+"/demandes");
  }
  public getNombreDemandes(id_offre:number){
    return this.http.get<number>("http://localhost:8085/"+id_offre+"/nombre_demandes");
  }

  // public addCandidat(candidat:Candidat,cv:File){
  //   const headers= new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   const formData=new FormData();
  //   formData.append('id_Candidat',candidat.id_Candidat.toString());
  //   formData.append('nom',candidat.nom);
  //   formData.append('email',candidat.email);
  //   const cvBlob=new Blob([candidat.cv],{ type:candidat.cv.type})
  //   formData.append('cv',cvBlob,candidat.cv.name)
  //   return this.http.post("http://localhost:8085/saveCandidat", formData, { headers: headers })
  // }

  public deletCandidat(id_candidat:string){
   return  this.http.delete("http://localhost:8085/delete_candidat/"+id_candidat)

  }
}

