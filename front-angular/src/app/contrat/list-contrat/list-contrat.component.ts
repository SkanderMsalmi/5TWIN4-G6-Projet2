import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contrat } from 'src/app/core/model/Contrat';
import { ContaratService } from 'src/app/core/services/contrat.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.scss']
})
export class ListContratComponent implements OnInit {

  public all:contrat[];
  constructor(private route:ActivatedRoute, private router:Router,private contratservice:ContaratService) { }

  ngOnInit(): void {

    this.contratservice.getAllContrat().subscribe((response:contrat[])=>{
      this.all=response;},
      ()=>{console.log("error")},
            ()=>{console.log("complete")});
  }
  delete(c:contrat){
    let i=this.all.indexOf(c);
    this.contratservice.deleteContrat(c.idContrat).subscribe(
      ()=>{this.all.splice(i,1);}
  
    )
  }
  update(c:contrat){
    let id=this.all.indexOf(c);
   
    this.router.navigate(['new/id'])
  

}}
