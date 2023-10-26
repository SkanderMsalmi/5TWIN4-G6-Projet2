import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormContratComponent } from './form-contrat/form-contrat.component';


@NgModule({
  declarations: [
    ContratComponent,
    ListContratComponent,
    FormContratComponent

  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    HttpClientModule,
    FormsModule
]
})
export class ContratModule { }
