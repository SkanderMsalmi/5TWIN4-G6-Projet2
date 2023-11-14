import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailEnseignantComponent } from './detail-enseignant/detail-enseignant.component';
import { InfoEnseignantComponent } from './info-enseignant/info-enseignant.component';


@NgModule({
  declarations: [
    EnseignantComponent,
    FormEnseignantComponent,
    ListEnseignantComponent,
    DetailEnseignantComponent,
    InfoEnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class EnseignantModule { }
