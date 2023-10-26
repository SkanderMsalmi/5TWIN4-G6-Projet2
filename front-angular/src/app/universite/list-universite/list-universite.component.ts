import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})
export class ListUniversiteComponent implements OnInit {
  public list: Universite[];
 // public all: Universite[];
  constructor(private universiteService: UniversiteService,
    private route: ActivatedRoute) { }

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
      ()=>{this.list.splice(i,1)}
    )
  }

}
