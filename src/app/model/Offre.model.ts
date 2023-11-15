import {offres_skills} from "./offres_skills.model";

export interface Offre{
  offre_id:number
  title : string
  date_offre:Date
  publication:boolean
  description:string
  offres_skills:offres_skills
}
