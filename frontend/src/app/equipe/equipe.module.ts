import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterEquipPipe } from '../pipes/filter-equip.pipe';
import { FilterEtudiantPipe } from '../pipes/filter-etudiant.pipe';

import { EquipeRowComponent } from './equipe-row/equipe-row.component';
import { EquipeEtudiantComponent } from './equipe-etudiant/equipe-etudiant.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { EquipeCardComponent } from './equipe-card/equipe-card.component';


@NgModule({
  declarations: [
    EquipeComponent,
    DetailEquipeComponent,
    FormEquipeComponent,
    ListEquipeComponent,
    FilterEquipPipe,
    FilterEtudiantPipe,
    EquipeRowComponent,
    EquipeEtudiantComponent,
    AjoutEquipeComponent,
    EquipeCardComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipeModule { }
