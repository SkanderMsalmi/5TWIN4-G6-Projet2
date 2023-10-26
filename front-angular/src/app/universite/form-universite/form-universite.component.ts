import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/services/universite.service';
@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.scss']
})
export class FormUniversiteComponent implements OnInit {

  public universite: Universite;
  public action: string;

  constructor(private universiteService: UniversiteService,
    private router:Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    
   
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      //update
      this.action="Update";
      //this.uni= this.uniService.getuniByID(id);
      this.universiteService.getUniversiteByID(id).subscribe(
        (object: Universite)=> this.universite=object
      )
      console.log(this.universite)
      console.log(id)
    }else
    { this.action="Add";
      this.universite = new Universite();}
     
  }
  saveUni(){
    if(this.action=='Add')
    {
    //this.universiteService.list.push(this.universite);
    this.universiteService.addUniversite(this.universite).subscribe(
      ()=>{ this.router.navigate(['/universites/list'])}
    )
   }
    else {
      this.universiteService.update(this.universite).subscribe(
        ()=> this.router.navigate(['/universites/list'])
      )
    }
  }

 

}
