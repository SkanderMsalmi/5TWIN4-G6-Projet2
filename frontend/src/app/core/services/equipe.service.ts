import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equip } from '../model/equipe';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public equipe : Equip|any;
 
  public url = environment.url+"ControleurEquipe/";
  public urldetailEquipe = "http://localhost:8089/SpringMVC/ControleurDetailEquipe/deleteDetailEquipe/";
  constructor(private http:HttpClient) {
    
  }

 getAllEquipes(){
  return this.http.get<Equip[]>(this.url+"displayEquipes");
 }

 getEquipeById(id:number){
  return this.http.get<Equip>(this.url+"displayEquipe/"+id);
 }

 addEquip(e:Equip){
  
  return this.http.post(this.url+"addEquipe",e);
 }

 updateEquip(e:Equip){
  return this.http.put(this.url+"updateEquipe",e);
 }

 deleteEquip(e:Equip){
return this.http.delete<Equip>(this.url+"deleteEquipe/"+e.idEquipe);
 }

 checkName(name:string){
  return this.http.get<boolean>(this.url+"checkName/"+name);
 }
}
