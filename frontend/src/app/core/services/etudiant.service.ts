import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../model/etudiant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public url=environment.url+'etudiant/'
  public list: Etudiant[] =  []
  constructor(private http:HttpClient) { }

  getAllEtudiants(){
    return this.http.get<Etudiant[]>(this.url+'retrieve-all-etudiants');
  }
  addEtudiant(p:Etudiant){
    return this.http.post(this.url+'add-etudiant',p);
  }
  public delete(id: number){
    return this.http.delete(this.url+'remove-etudiant/'+id);
  }
  public getById(id:number):any{
    return this.http.get<Etudiant>(this.url+'retrieve-etudiant/'+id);

  }
  public update(p:Etudiant){
    return this.http.put(this.url+'update-etudiant',p);
  }
}
