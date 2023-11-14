import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './list-universite/search.pipe';
import { FormUniDepartsComponent } from './form-uni-departs/form-uni-departs.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { DepartementComponent } from './departement/departement.component';
import { UpdateFormComponent } from './update-form/update-form.component';
 


@NgModule({
  declarations: [
    UniversiteComponent,
    ListUniversiteComponent,
    FormUniversiteComponent,
    SearchPipe,
    FormUniDepartsComponent,
 
    ListDepartementsComponent,
    DepartementComponent,
    UpdateFormComponent
 
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversiteModule { }
