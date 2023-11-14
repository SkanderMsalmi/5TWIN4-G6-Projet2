import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equip } from 'src/app/core/model/equipe';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service.tes';

@Component({
  selector: 'app-equipe-etudiant',
  templateUrl: './equipe-etudiant.component.html',
  styleUrls: ['./equipe-etudiant.component.scss']
})
export class EquipeEtudiantComponent implements OnInit {
  public equipe : Equip;
  public etudiant : Etudiant;
  public filterText :string ="";
  public view :string ="";
  public listEtudiant : Etudiant[]=[];
  public tousEtudiant : Etudiant[]=[];
  public idEquipe:number;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private serviceEquipe:EquipeService,private serviceEtudiant:EtudiantService) {
    this.etudiant = new Etudiant();
    this.equipe= new Equip();
this.equipe.etudiants =[];
   }


  ngOnInit(): void {
   this.idEquipe = this.activatedRoute.snapshot.params['id'];

    this.serviceEquipe.getEquipeById(this.idEquipe).subscribe(
      (response)=>{
        this.equipe=response;
        this.listEtudiant = this.equipe.etudiants;
      }
    )
    this.serviceEtudiant.getAllEtudiants().subscribe(
      (reponse)=>{ this.tousEtudiant=reponse;
        
  }
    )

  }
  addMemberToTeam(idEtudiant:number){
    this.serviceEtudiant.assignEtudiantToEquipe(this.equipe,idEtudiant,this.idEquipe).subscribe(
     ()=>{
      this.ngOnInit();
      
     } 
    );
  
  }
  public checkiFInEquipe(idEtudiant:number):boolean{
    
    if(this.equipe.etudiants.find((e)=>e.idEtudiant==idEtudiant)){
      
      return true;
    }else {
      
      return false;
  }}

  deleteEtudiantFromEquipe(e:Etudiant,idEtudiant:number,idEquipe:number){
    
    let i = this.equipe.etudiants.indexOf(e);
    this.serviceEtudiant.unassignEtudiantFromEquipe(idEtudiant,idEquipe).subscribe(
      ()=>{
        this.equipe.etudiants.splice(i,1);
      }
    )
   
  }

}
