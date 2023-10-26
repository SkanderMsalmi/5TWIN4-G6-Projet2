import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite.component';



const routes: Routes =  [
  {path:'',component: UniversiteComponent,children:[
  {path:'', component: ListUniversiteComponent},
  {path:'list', component: ListUniversiteComponent},  
  {path:'new', component: FormUniversiteComponent},
  {path:'update/:id', component: FormUniversiteComponent},
  
 ]}]

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
