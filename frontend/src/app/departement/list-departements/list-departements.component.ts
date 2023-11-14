import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/model/departement';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { DepartementService } from 'src/app/core/services/departement.service';
import { EnseignantService } from 'src/app/core/services/enseignant.service';


@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.scss']
})
export class ListDepartementsComponent implements OnInit {
public list: Departement[];
public listlength:number=0;
searchtext:any;
  constructor(private depService:DepartementService, private ensService:EnseignantService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.depService.getAllDepartement().subscribe(
      (response:Departement[]) => { this.list = response ;
      console.log(this.list), this.listlength=this.list.length},
      () => { console.log("error") },
      () => { console.log("complete") },
      
    )
  }

  





deleteDep(d:Departement){
  let i=this.list.indexOf(d);
  if(confirm("Are you sure to delete "+d.nomDepart)) {

  this.depService.deleteDepartement(d.idDepartement).subscribe(
    ()=>{this.list.splice(i,1), this.listlength=this.list.length,  this.toastr.warning(d.nomDepart+' supprimé avec succés','Suppression');
  },
    error => (err: string) => {
      console.log("err" + err);
      this.toastr.error('something went wrong !', 'Error');
    }
  )}}

  getColor(departement: Departement) { 
  switch (departement.bloc) {
    case 'A':
      return '#EF8490';
    case 'B':
      return '#EFD384';
    case 'C':
      return '#AFEF84';
      case 'D':
        return '#84EFB5';
      case 'E':
        return '#84CEEF';
      case 'F':
        return '#9684EF';
        case 'G':
        return 'EF84EC';
        default: 
        return '#180D0E'
  }

  } 





}