import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { contrat } from '../model/Contrat';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn:'root'
})
export class ContaratService {
  List:contrat[];
  public url=environment.url+'contrat/';
public url2=environment.url+'etudiant/';
  constructor(private http:HttpClient){}
  getAllContrat(){
    return this.http.get<contrat[]>(this.url+"retrieve-all-contrats");
     }
  addContrat(c:contrat){
       return this.http.post(this.url+"add-contrat",c)
     }
  deleteContrat(id:number){
   return this.http.delete(this.url+"remove-contrat/"+id)
   }
  updateContrat(c:contrat){
     return this.http.put(this.url+"update-contrat/",c)
   }
  getContratByID(id:number){
     return this.http.get<contrat>(this.url+"retrieve-contrat/"+id)
   }
   getidNomPrenomEtudiant(){
    return this.http.get<Etudiant[]>(this.url2+"retrieve-all-etudiants")
   }
}
