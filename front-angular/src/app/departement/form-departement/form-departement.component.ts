import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-form-departement',
  templateUrl: './form-departement.component.html',
  styleUrls: ['./form-departement.component.scss']
})
export class FormDepartementComponent implements OnInit {
  public departement:Departement;
  public  action:string  ;

  constructor(private depService:DepartementService,private router:Router,private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.currentRoute.snapshot.params['id']; 
    if(id!=null){
      this.action="Update";
      this.depService.getDepartementByID(id).subscribe(
        (objDep:Departement) => this.departement=objDep
      )
      console.log(this.departement)
      console.log(id)

    }
    else {
      this.action="Add";
      this.departement = new Departement();
    }
  }
  saveDep(){
    console.log("saveisdone");
    if(this.action=='Add')

    {     console.log("action is add");

      this.depService.addDeprement(this.departement).subscribe(
        ()=>{this.router.navigate(['/departements/list'])}
      )
    }
    else {
      console.log("we havent started yet");

      this.depService.updateDepartement(this.departement).subscribe(
        
        ()=> this.router.navigate(['/departements/list'])
        
      )
    }
  }

}
