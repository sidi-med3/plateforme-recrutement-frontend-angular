import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from "./app-routing-module";
import { AppComponent } from './app.component';
import { DemandesComponent } from './demandes/demandes.component';
import { OffresComponent } from './offres/offres.component';
import { CandidatsComponent } from './candidats/candidats.component';
import {RouterOutlet} from "@angular/router";
import { AddNewOffreComponent } from './add-new-offre/add-new-offre.component';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListesOffresComponent } from './listes-offres/listes-offres.component';
import {MatButtonModule} from '@angular/material/button';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { CandidatComponent } from './user/candidat/candidat.component';
import { LoginComponent } from './login/login.component';
import { TemplateAdminComponent } from './template-admin/template-admin.component';
import { OffreNonPubComponent } from './offre-non-pub/offre-non-pub.component';
import { DemandesOffreComponent } from './demandes-offre/demandes-offre.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DemandesComponent,
    OffresComponent,
    CandidatsComponent,
    AddNewOffreComponent,
    DetailOffreComponent,
    ListesOffresComponent,
    UpdateOffreComponent,
    CandidatComponent,
    LoginComponent,
    TemplateAdminComponent,
    OffreNonPubComponent,
    DemandesOffreComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        FormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
    ],
  providers: [
    {provide :HTTP_INTERCEPTORS ,useClass :AppHttpInterceptor,multi:true},
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
