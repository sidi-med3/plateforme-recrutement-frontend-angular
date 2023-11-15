import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OffresComponent} from "./offres/offres.component";
import {CandidatsComponent} from "./candidats/candidats.component";
import {DemandesComponent} from "./demandes/demandes.component";
import {AddNewOffreComponent} from "./add-new-offre/add-new-offre.component";
import {DetailOffreComponent} from "./detail-offre/detail-offre.component";
import {UpdateOffreComponent} from "./update-offre/update-offre.component";
import {CandidatComponent} from "./user/candidat/candidat.component";
import {LoginComponent} from "./login/login.component";
import {TemplateAdminComponent} from "./template-admin/template-admin.component";
import {AuthenticatedService} from "./services/authenticated.service";
import {authenticationGuard} from "./guards/authentication.guard";
import {OffreNonPubComponent} from "./offre-non-pub/offre-non-pub.component";
import {DemandesOffreComponent} from "./demandes-offre/demandes-offre.component";

const routes:Routes=[
  {path:"login", component:LoginComponent},
  {path:"admin", component:TemplateAdminComponent,canActivate:[authenticationGuard],
    children:[
      {path:"offres", component:OffresComponent},
      {path:"offres_non_publiés",component:OffreNonPubComponent},
      {path: "candidats", component:CandidatsComponent},
      {path:"demandes_offre/:id",component:DemandesOffreComponent},
      {path:"demandes",component:DemandesComponent},
      {path:"new offre",component:AddNewOffreComponent},
      {path:"detail-offre/:id",component:DetailOffreComponent},
      {path:"update-offre/:id",component:UpdateOffreComponent},
    ]
    },
  {path:"detail-offre/:id",component:DetailOffreComponent},
  // {path:"", component:LoginComponent},
  {path:"",component:OffresComponent},
  {path:"add-candidat/:id",component:CandidatComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
