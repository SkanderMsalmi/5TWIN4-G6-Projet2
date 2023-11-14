import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form-uni-departs',
  templateUrl: './form-uni-departs.component.html',
  styleUrls: ['./form-uni-departs.component.scss']
})
export class FormUniDepartsComponent implements OnInit {
  public deplist: Departement []=[];
  public uni : Universite;
  public unilist : Universite[]=[];
  public checkedlist : number[]=[];

 
   

  constructor(private universiteService: UniversiteService,private depService: DepartementService,
    private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.universiteService.getAllUniversite().subscribe(
      (response: Universite[]) => { this.unilist = response ;
         //filter
    console.log(this.unilist)    

      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );
  
    this.depService.getAllDepartement().subscribe(
      (response: Departement[]) => { this.deplist = response ;
         //filter
    console.log(this.deplist)    

      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );   
    
  }  
   onchange(){
    console.log(this.deplist)  
  }
  
  assignUniDep(){    
    let last:any = this.unilist.slice(-1)[0].idUniv ;
   this.checkedlist = this.deplist.filter(x=>x.isselected==true).map(x=>x.idDepartement)   
   for(let i in this.checkedlist){
    let checked = this.checkedlist[i];
    this.universiteService.assignUniToDep(last,checked,this.uni).subscribe(
        ()=> {this.router.navigate(['/universites/list']);this.toastr.success("Les Departements sont  assignés avec succés pour l'universite "+ this.uni.nomUniv,'Success');})
       
  
   }
  }
}
