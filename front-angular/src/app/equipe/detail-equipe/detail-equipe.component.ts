import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/model/detailEquipe';
import { Equip } from 'src/app/core/model/equipe';
import { Etudiant } from 'src/app/core/model/etudiant';
import { DetailEquipeService } from 'src/app/core/services/detail-equipe.service';
import { EquipeService } from 'src/app/core/services/equipe.service';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.scss']
})
export class DetailEquipeComponent implements OnInit {
  public equipe : Equip ;
  public detailEquipe : DetailEquipe;
  public idDetail:number;
  constructor(private serviceEquipe:EquipeService,private serviceDetailEquipe:DetailEquipeService,private activatedRoute:ActivatedRoute,private router : Router) {
    this.detailEquipe = new DetailEquipe();
    this.equipe = new Equip();
   }

  ngOnInit(): void {
    this.equipe= new Equip();
    this.equipe.etudiants = [];
    let idEquipe = this.activatedRoute.snapshot.params['idEquipe'];
    let idDetailEquipe = this.activatedRoute.snapshot.params['idDetailEquipe'];
    if(idEquipe != null){
      this.serviceEquipe.getEquipeById(idEquipe).subscribe(
        (object:Equip)=>{ 
          this.equipe = object;
        }
        
      )

   
     
    }
    if(idDetailEquipe != null){
      this.serviceDetailEquipe.getDetailEquipeById(idDetailEquipe).subscribe(
        (object:DetailEquipe)=>{ 
          this.detailEquipe = object;
        }
        
      )

   
     
    }

    
    
    
  }
  deleteEquipe(equipe:Equip){
      this.serviceEquipe.deleteEquip(equipe).subscribe(
        () => this.router.navigate(['/equipes'])
      );
      
  }
  

}
