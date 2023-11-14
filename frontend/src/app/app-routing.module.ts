import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat/contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
 { path: 'universites', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
 { path: 'etudiants', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'contrats', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule) }, 
  { path: 'departements', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) }, 
  { path: 'equipes', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
 { path: 'enseignants', loadChildren: () => import('./enseignant/enseignant.module').then(m => m.EnseignantModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
