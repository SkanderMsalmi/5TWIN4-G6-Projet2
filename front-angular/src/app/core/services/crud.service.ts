import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type } from 'os';
import { environment } from 'src/environments/environment';
import { DetailEquipe } from '../model/detailEquipe';
import { Equip } from '../model/equipe';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url = environment.url;
  public t :string="";
  constructor(private http:HttpClient) { }

  getAll(obj : any,path:string){
    return this.http.get<typeof obj[]>(this.url+path);
   }
  
   getById(obj : any,id:number,path:string){
    return this.http.get<typeof obj>(this.url+path+"/"+id);
   }
  
   add(obj : any,path:string){
    
    return this.http.post(this.url+path+"/",obj);
   }
  

  
   delete(obj:any,path:string){
  return this.http.delete<typeof obj>(this.url+path);
   }
}
