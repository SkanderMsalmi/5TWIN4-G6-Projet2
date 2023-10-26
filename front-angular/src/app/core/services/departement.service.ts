import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departement } from '../model/departement';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  public url=environment.url+'controllerDepartement/';

  constructor(private http: HttpClient) { }
  getAllDepartement(){
    return this.http.get<Departement[]>(this.url+'DisplayDepartements')
  }

  addDeprement(d:Departement){
    console.log("we are in service");

    return this.http.post(this.url+'AddDepartement/',d)
    
  }

  deleteDepartement(id:number){
    return this.http.delete(this.url+'deleteDepartement/'+id)
  }
  updateDepartement(d:Departement){

    return this.http.put(this.url+'UpdateDepartement',d)
  }
  getDepartementByID(id:number){
    return this.http.get<Departement>(this.url+'DisplayDepartementById/'+id)
  }
}
