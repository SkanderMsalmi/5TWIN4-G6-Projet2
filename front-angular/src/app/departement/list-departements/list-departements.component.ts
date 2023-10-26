import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.scss']
})
export class ListDepartementsComponent implements OnInit {
public list: Departement[];
  constructor(private depService:DepartementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.depService.getAllDepartement().subscribe(
      (response:Departement[]) => { this.list = response ;
      console.log(this.list)},
      () => { console.log("error") },
      () => { console.log("complete") },
      
    )
  }
deleteDep(d:Departement){
  let i=this.list.indexOf(d);
  this.depService.deleteDepartement(d.idDepartement).subscribe(
    ()=>{this.list.splice(i,1)}
  )
}
}
