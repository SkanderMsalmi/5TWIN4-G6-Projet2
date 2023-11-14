import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/model/detailEquipe';
import { Equip } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import{Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.scss']
})
export class FormEquipeComponent implements OnInit {
  public equip : Equip ;
  public action :string;
  constructor(private equipService:EquipeService,private router : Router,private activatedRoute:ActivatedRoute,private location:Location,private toastr: ToastrService) {
    this.equip = new Equip();
    this.equip.detailEquipe = new DetailEquipe();
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if(id != null){
      this.action = "Modifier";
      this.equipService.getEquipeById(id).subscribe(
        (object:Equip)=>this.equip=object
      )
    }else{
      this.action = "Ajouter";
    }

   
  }
  saveEquip() {
    if(this.action == "Ajouter"){
      this.equipService.addEquip(this.equip).subscribe(
        ()=>{this.router.navigate(['/equipes'])}
      );
    }else{
      this.equipService.updateEquip(this.equip).subscribe(
        ()=>{
          this.toastr.success("L'equipe "+this.equip.nomEquipe +' modifié avec succès','Success');
          this.location.back();
      }
      )
    }
   
    }

    
}
