import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../model/etudiant';
import { environment } from 'src/environments/environment';
import { Equip } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public etudiants : Etudiant[];
  public url = environment.url+"etudiant/";
  constructor(private http:HttpClient) { }

  getAllEtudiants(){
    return this.http.get<Etudiant[]>(this.url+"retrieve-all-etudiants");
  }

  getEtudiantById(id:number){
    return this.http.get<Etudiant>(this.url+"retrieve-etudiant/"+id)
  }

  addEtudiant(e:Etudiant){
    return this.http.post<Etudiant>(this.url+"add-etudiant",e);
  }

  updateEtudiant(e:Etudiant){
    return this.http.put<Etudiant>(this.url+"update-etudiant",e)
  }

  deleteEtudiant(e:Etudiant){
    return this.http.delete<Etudiant>(this.url+"remove-etudiant/"+e.idEtudiant);
  }

  assignEtudiantToDepartement(e:Etudiant,idDepartement:number){
    return this.http.put<Etudiant>(this.url+"affecter-etudiant-departement/"+e.idEtudiant+"/"+idDepartement,e)
  }
  addAndAssignEtudiantToEquipeAndContract(e:Etudiant,idDepartement:number,idContrat:number){
    return this.http.put<Etudiant>(this.url+"add-assign-Etudiant/"+e.idEtudiant+"/"+idContrat,e)
  }
  assignEtudiantToEquipe( e:Equip,idEtudiant:number,idEquipe:number){
    return this.http.post<Etudiant>(this.url+"assignEtudiantToEquipe/"+idEtudiant+"/"+idEquipe,e)
  }
  unassignEtudiantFromEquipe(idEtudiant:number,idEquipe:number){
    return this.http.delete(this.url+"unassignEtudiantFromEquipe/"+idEtudiant+"/"+idEquipe)
  }
}
