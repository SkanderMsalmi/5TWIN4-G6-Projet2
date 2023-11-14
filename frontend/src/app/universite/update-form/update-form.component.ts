import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  public universite: Universite;
 
  public deplist: Departement[];
  public list: Universite[];
  public checkedlist: number[];
  public itsupdate: boolean;
  public unideplist: Departement[];
  public checkedlistname: Departement[];
  public newlist :  Departement[] ;
 

  constructor(private universiteService: UniversiteService, private depService: DepartementService,
    private router: Router, private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.universiteService.getAllUniversite().subscribe(
      (response: Universite[]) => {
        this.list = response;
        //filter
        console.log(this.list)


      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );



    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {

    
      /////////////////// departs of this uni 
      this.universiteService.getDeparts(id).subscribe(
        (response: Departement[]) => {
          this.unideplist = response;

        },

      );
      ///////////////////////////////////////         


      this.depService.getAllDepartement().subscribe(

        (data: Departement[]) => {
          this.deplist = data;
 
       for (let j=0; j<this.unideplist.length; j++) {
           
       
        this.deplist.filter(x => x.idDepartement == Number(this.unideplist[j].idDepartement)).map(x=>x.isselected = true)
        
   
         }
          console.log(this.deplist)
        }

      );

      this.universiteService.getUniversiteByID(id).subscribe(
        (object: Universite) => this.universite = object
      )

      console.log(this.universite)
      console.log(id)



    } 

  }


  
  saveUni() {     
   
      
        let id = this.currentRoute.snapshot.params['id'];
        this.checkedlist = this.deplist.filter(x => x.isselected == true).map(x => x.idDepartement)
        for (let i in this.checkedlist) {
          let checked = this.checkedlist[i];
          this.universiteService.assignUniToDep(id, checked, this.universite).subscribe()
    
        }
      
      this.universiteService.update(this.universite).subscribe(
        () =>{ this.router.navigate(['/universites/']);this.toastr.info("L'universite "+this.universite.nomUniv +' modifié avec succés','Modification');}
      )

      
    
  }



  onchange() {
    console.log(this.deplist)
  }
  

}
