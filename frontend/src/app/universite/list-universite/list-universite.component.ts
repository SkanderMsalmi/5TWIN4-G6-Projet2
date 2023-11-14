import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/services/universite.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})
export class ListUniversiteComponent implements OnInit {
  searchUni : string ='';
  public list: Universite[];
  
 // public all: Universite[];
  constructor(private universiteService: UniversiteService,
    private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.universiteService.getAllUniversite().subscribe(
      (response: Universite[]) => { this.list = response ;
         //filter
    console.log(this.list)
    

      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );
  
     }
  deleteUni(u:Universite){
    let i = this.list.indexOf(u);
    this.universiteService.delete(u.idUniv).subscribe(
      ()=>{this.list.splice(i,1);this.toastr.warning("L'universite  "+u.nomUniv +' supprimé avec succés','Suppression');}
    )
  }

}
