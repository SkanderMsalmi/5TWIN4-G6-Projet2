import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailEquipe } from '../model/detailEquipe';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  public urldetailEquipe = "http://localhost:8089/SpringMVC/ControleurDetailEquipe/";
  constructor(private http:HttpClient) { }
  getDetailEquipeById(idDetailEquipe:number){
    return this.http.get<DetailEquipe>(this.urldetailEquipe+"displayDetailEquipe/"+idDetailEquipe);
   }

  deleteDetailEquipe(idDetailEquipe:number){
    return this.http.delete<DetailEquipe>(this.deleteDetailEquipe+"deleteDetailEquipe/"+idDetailEquipe);
  } 
}
