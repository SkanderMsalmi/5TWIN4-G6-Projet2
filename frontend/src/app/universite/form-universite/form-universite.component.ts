import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.scss']
})
export class FormUniversiteComponent implements OnInit {

  public submitted = false;

  public universite: Universite;
  public action: string;
  public deplist: Departement[];
  public list: Universite[];
  public checkedlist: number[];
  public itsupdate: boolean;
  public unideplist: Departement[];
  public checkedlistname: Departement[];
  public newlist: Departement[];
  public filtered1: Departement[];
  public filtered2: Departement[];
  //public newlist : (Departement[] | Departement[]) [];

  // public list: Universite[];
  reactiveForm: FormGroup ;
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

  constructor(private universiteService: UniversiteService, private depService: DepartementService,
    private router: Router, private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {


    this.reactiveForm = this.formBuilder.group({
      "uniname": ['', Validators.required],
      "mail": ['', 
      [
        Validators.required, 
        Validators.pattern(this.emailPattern),
      ]
    ],
      "address": [ '', Validators.required ],


    });


    this.universite = new Universite();



  }
  get f(): { [key: string]: AbstractControl } {
    return this.reactiveForm.controls;
  }


   


  onchange() {
    console.log(this.deplist)
  }


  onSubmit() {
    this.submitted = true
    if (this.reactiveForm.invalid) {
      return;
    }else{
      this.universiteService.addUniversite(this.universite).subscribe(
        () => { this.router.navigate(['/universites/adddeparts']);this.toastr.success("L'universite  "+this.universite.nomUniv +' ajoutee avec succés','Success'); }
      )
  
    }
   
  }



}
