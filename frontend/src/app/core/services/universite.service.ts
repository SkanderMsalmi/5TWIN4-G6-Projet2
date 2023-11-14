import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Universite } from '../model/universite';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  
  public url= environment.url+'ControleurUniversite/';
  public url2= environment.url+'controllerDepartement/';

  constructor(private http: HttpClient) { }
  getAllUniversite(){
    return this.http.get<Universite[]>(this.url+'displayUniversites/')
  }
  addUniversite(u:Universite){
    return this.http.post(this.url+'addUniversite/',u)
  }
  delete(id: number){
    return this.http.delete(this.url+'deleteUniversite/'+id)
  }
  update(u:Universite){
    return this.http.put(this.url+'updateUniversite/'+u.idUniv, u)
  }
  getUniversiteByID(id:number){
    return this.http.get<Universite>(this.url+'displayUniversite/'+id)
  }

  assignUniToDep(idu:number , idd:number, u:Universite){
    return this.http.post(this.url+ idu+'/assignUniversiteToDepartement/'+idd,u)
  }
  getDeparts(id:number){
    return this.http.get<Departement[]>(this.url2+'displayUniversiteDepartements/'+id)
  }

  unassignDepFromUni(idu:number , idd:number, u:Universite){
    return this.http.post(this.url+'unassignDeapartementFromUniversite/' +idu+'/'+idd,u)
  }

}
