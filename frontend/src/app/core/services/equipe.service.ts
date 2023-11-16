import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equip } from '../model/equipe';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public equipe : Equip|any;
 
  public url = environment.url+"equipe/";
  public urldetailEquipe = "http://localhost:8089/SpringMVC/ControleurDetailEquipe/deleteDetailEquipe/";
  constructor(private http:HttpClient) {
    
  }

 getAllEquipes(){
  return this.http.get<Equip[]>(this.url+"retrieve-all-equipes");
 }

 getEquipeById(id:number){
  return this.http.get<Equip>(this.url+"retrieve-equipe/"+id);
 }

 addEquip(e:Equip){
  
  return this.http.post(this.url+"add-equipe",e);
 }

 updateEquip(e:Equip){
  return this.http.put(this.url+"update-equipe",e);
 }

 deleteEquip(e:Equip){
return this.http.delete<Equip>(this.url+"add-equipe/"+e.idEquipe);
 }


}
