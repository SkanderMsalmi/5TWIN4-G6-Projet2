import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEquipe } from '../core/model/detailEquipe';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { EquipeEtudiantComponent } from './equipe-etudiant/equipe-etudiant.component';
import { EquipeComponent } from './equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [{ path: '', component: EquipeComponent,children:[
  {path:'',component:ListEquipeComponent},
  {path:'niveau/:niveau',component:ListEquipeComponent},
  {path:'equipeMember/:id',component:EquipeEtudiantComponent},

  {path:'editEquipe/:id',component:FormEquipeComponent},
  {path:':idEquipe/:idDetailEquipe',component:DetailEquipeComponent},
  {path:'new',component:FormEquipeComponent},
  {path:'ajout',component:AjoutEquipeComponent}
  
]  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
