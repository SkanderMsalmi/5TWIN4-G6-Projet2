import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EtudiantComponent } from './etudiant.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';

const routes: Routes = [{ path: '', component: EtudiantComponent ,children:[ {path:"", component: ListEtudiantsComponent},
{path:"list", redirectTo: '', pathMatch:'full'},
{path:"add", component: AddEtudiantComponent},
{path:'update/:id', component:AddEtudiantComponent}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
