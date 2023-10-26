import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';


const routes: Routes = [
  { 
    path:'', component:ContratComponent,children:[
             {path:'',component:ListContratComponent},
             {path:'new',component:FormContratComponent},
             {path:'update/:id',component:FormContratComponent},
             {path:'list',redirectTo:'',pathMatch:"full"}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
