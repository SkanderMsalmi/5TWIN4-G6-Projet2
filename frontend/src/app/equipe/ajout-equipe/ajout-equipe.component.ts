import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs';
import { Equip } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.scss']
})
export class AjoutEquipeComponent implements OnInit {
  public form :FormGroup;
  public equip : Equip;
  public nameExist:boolean;
  public listAllEquipes: Equip[]=[];
  public niveaux : [
    {label:'Expert',value:"EXPERT"},
    {label:'Senior',value:"SENIOR"},
    {label:'Junior',value:"JUNIOR"}
  ]
  get nom(){
    return this.form.get('nom')
  }
  get niveau(){
    return this.form.get('niveau')
  }
  get salle(){
    return this.form.get('salle')
  }
  get thematique(){
    return this.form.get('thematique')
  }



  // validatorAsync(formControl:AbstractControl):Promise<{[s:string]:boolean}>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve({});
  //     },5000)
  //   })
  // }

  constructor(private equipeService:EquipeService,private router:Router,private toastr: ToastrService) {
    this.form = new FormGroup({});
    
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      niveau : new FormControl('',[Validators.required]),
      salle: new FormControl('',[Validators.required,Validators.min(1)]),
      thematique : new FormControl('',[Validators.required])
    });


  }

  public ajoutEquipe():void{
    if(this.form.valid== true){
    this.equip = new Equip({
      nomEquipe:this.form.get('nom')?.value,
      niveau:this.form.get('niveau')?.value,
      detailEquipe:{
        salle:this.form.get('salle')?.value,
        thematique:this.form.get('thematique')?.value
      }

    });
    }
    this.equipeService.addEquip(this.equip).subscribe(
      ()=>{this.router.navigate(['/equipes']);this.toastr.success("L'equipe "+this.equip.nomEquipe +' ajoutee avec succés','Success');}
    )
    
  }



 
   

}
