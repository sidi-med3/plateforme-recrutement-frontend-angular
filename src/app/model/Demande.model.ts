import {Offre} from "./Offre.model";
import {Candidat} from "./Candidat.model";

export interface Demande{
  id_Demande:number
  offre:Offre
  candidat:Candidat
  status:string
}
