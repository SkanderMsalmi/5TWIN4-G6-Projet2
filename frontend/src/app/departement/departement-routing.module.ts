import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement.component';
import { DetailDepartementComponent } from './detail-departement/detail-departement.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';


const routes: Routes = [
  { path: '', component: DepartementComponent,children:[
   {path:'', component:ListDepartementsComponent},
   {path:'list', component: ListDepartementsComponent},  
  {path:'new', component: FormDepartementComponent},
  {path:'update/:id', component: FormDepartementComponent},
  {path:'detail/:id', component: DetailDepartementComponent},
  
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
