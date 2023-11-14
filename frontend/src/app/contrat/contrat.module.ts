import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { Ng2OrderModule } from 'ng2-order-pipe';

import autoTable from 'jspdf-autotable'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import jsPDF from 'jspdf';



@NgModule({
  declarations: [
    ContratComponent,
    ListContratComponent,
    FormContratComponent,
    

  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    
    
  ]
})
export class ContratModule { }
