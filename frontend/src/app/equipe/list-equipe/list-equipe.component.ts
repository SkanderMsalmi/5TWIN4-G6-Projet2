import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equip } from 'src/app/core/model/equipe';
import { Niveau } from 'src/app/core/model/Niveau';
import { CrudService } from 'src/app/core/services/crud.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.scss']
})
export class ListEquipeComponent implements OnInit {
  public all : Equip[]=[];
  public list : Equip[]=[];
  public niveau:Niveau;
  public  view :string ="";
  public filterText :string ="";
  public controlleurUrl:string ="equipe/";
  public showModal:boolean=false;
 

  constructor(private equipeService:CrudService,private route:ActivatedRoute,private toastr: ToastrService) { 
    this.view = "list"
  }

  ngOnInit(): void {
    this.equipeService.getAll(Equip,this.controlleurUrl+"retrieve-all-equipes").subscribe(
      (response:Equip[])=>{
        this.all = response;
        this.route.params.subscribe(
          (params)=>{
            this.niveau = params['niveau'];
            
            
            if(this.niveau != null){
              this.list = this.all.filter((equipe)=>equipe.niveau == this.niveau);
            }else{
              this.list = this.all;
            }
          }
        )
      }
    )
  }

  updateEquipe(){

  }

  deleteEquipe(e:Equip){
    
      let i = this.list.indexOf(e);
      this.equipeService.delete(e,this.controlleurUrl+"remove-equipe/"+e.idEquipe).subscribe(
        ()=>{
          this.list.splice(i,1);
          this.toastr.warning("L'equipe "+e.nomEquipe +' supprimé avec succés','Suppression');
        }
      )
      this.showModal=false;

  }



}
