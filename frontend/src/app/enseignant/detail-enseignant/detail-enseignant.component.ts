import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/model/departement';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { DepartementService } from 'src/app/core/services/departement.service';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrls: ['./detail-enseignant.component.scss']
})
export class DetailEnseignantComponent implements OnInit {

  public enseignant: Enseignant; 
  public list: Departement[];
  public departement:Departement;
selectedOption: any;

  constructor(private ensService:EnseignantService,private depService:DepartementService,private router:Router,private currentRoute: ActivatedRoute,private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    let id=this.currentRoute.snapshot.params['id']; 
    if(id!=null){
      this.ensService.getEnseignantByID(id).subscribe(
        (objDep:Enseignant) => this.enseignant=objDep
      )

    }
    
    this.depService.getAllDepartement().subscribe(
      (response:Departement[]) => { this.list = response ;
      console.log(this.list)},
      () => { console.log("error") },
      () => { console.log("complete") },
      
    )




   


  }

    
    
    print() { 
      //this.enseignant.departement_id_depart=this.departement.idDepartement
     this.ensService.assingEnseignantToDepartement(this.enseignant,this.departement.idDepartement).subscribe(
     // this.ensService.updateEnseignant(this.enseignant).subscribe(
      ()=> (this.toastr.success('enseignant '+this.enseignant.nom+'+ has been assigned to' +this.departement.nomDepart,'Success'),
      this.router.navigate(['/enseignants/list'])
      
      )
      
     )



    }
    back(){
      this.router.navigate(['/enseignants/list'])
    }

  }
