import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Universite } from '../model/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  
  public url= environment.url+'ControleurUniversite/';

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

 
  /*
  public url= environment.url+'universite/';

  constructor(private http: HttpClient) { }
  getAllUniversite(){
    return this.http.get<Universite[]>(this.url)
  }
  addUniversite(u:Universite){
    return this.http.post(this.url+'add/',u)
  }
  delete(id: number){
    return this.http.delete(this.url+'delete/'+id)
  }
  update(u:Universite){
    return this.http.put(this.url+'update/'+u.idUniv, u) ///////////////////////////////////
  }
  getUniversiteByID(id:number){
    return this.http.get<Universite>(this.url+'display/'+id)
  }

  */
}
