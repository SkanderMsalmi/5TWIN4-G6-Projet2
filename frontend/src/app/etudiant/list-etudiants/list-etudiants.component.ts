import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { fileHandler } from 'src/app/core/model/file';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.scss']
})
export class ListEtudiantsComponent implements OnInit {
  public students:Etudiant[];
  constructor(private es:EtudiantService,private s: DomSanitizer,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.es.getAllEtudiants().subscribe(data=>{this.students=data;
      for(let s of this.students){
        s.image=this.dataURIToBlob(s.profileImage);
      }
      console.log(this.students);
    })
  }
  dataURIToBlob(picByte: any):fileHandler{
    const byteString = window.atob(picByte);
    const int8Array = new Uint8Array(new ArrayBuffer(byteString.length));
    for (let i = 0; i< byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const b = new Blob([int8Array],{type: "data:image/jpeg;base64"});
    const f = new File([b],String(Math.floor(Math.random() * 10)),{type:"data:image/jpeg;base64"})
    return {
      file:f,
      url: this.s.bypassSecurityTrustUrl(window.URL.createObjectURL(f))
    };
  }
  delete(e:Etudiant){
    let i= this.students.indexOf(e);
    this.es.delete(e.idEtudiant).subscribe(()=>{this.students.splice(i,1);this.toastr.warning("L'etudiant "+e.nomE +' supprimé avec succés','Supprission');})
  }

}
