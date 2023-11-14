import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.scss']
})
export class FormEnseignantComponent implements OnInit {
 public enseignant: Enseignant;
 public action:string;
  constructor(private ensService:EnseignantService,private router:Router,private currentRoute: ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit(): void {
     let id=this.currentRoute.snapshot.params['id']; 
    if(id!=null){
      this.action="Update";
      this.ensService.getEnseignantByID(id).subscribe(
        (objDep:Enseignant) => this.enseignant=objDep
      )
      console.log(this.enseignant)
      console.log(id)

    }
    else {
      this.action="Add";
      this.enseignant = new Enseignant();
    }
  }
  saveEns(){
    console.log("saveisdone");
    if(this.action=='Add')

    {     console.log("action is add");

      this.ensService.addEnseignant(this.enseignant).subscribe(
        ()=>{this.toastr.success("professor"+this.enseignant.codeEns+"ajoutée avec succes",'success'),this.router.navigate(['/enseignants/list'])}
      )
    }
    else {
      console.log("action is updated");

      this.ensService.updateEnseignant(this.enseignant).subscribe(
        
        ()=> {this.toastr.info("professor with code "+this.enseignant.codeEns+" modifié avec succes",'Modification'),this.router.navigate(['/enseignants/list'])}
        , error => (err: string) => {
          console.log("err" + err);
          this.toastr.error('something went wrong !', 'Error');
        }
      )
        
      
    }
  }
  back(){
    this.router.navigate(['/enseignants/list'])
  }

}