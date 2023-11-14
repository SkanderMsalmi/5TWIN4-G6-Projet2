import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailDepartementComponent } from './detail-departement/detail-departement.component';



@NgModule({
  declarations: [
    DepartementComponent,
    ListDepartementsComponent,
    FormDepartementComponent,
    DetailDepartementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartementRoutingModule, 
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class DepartementModule { }
