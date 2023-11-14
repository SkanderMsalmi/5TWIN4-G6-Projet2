import { Pipe, PipeTransform } from '@angular/core';
import { Etudiant } from '../core/model/etudiant';

@Pipe({
  name: 'filterEtudiant'
})
export class FilterEtudiantPipe implements PipeTransform {

  transform(etudiants: Etudiant[], filterText: string): Etudiant[] {
    if(etudiants.length === 0 || filterText === ''){
      return etudiants;
    }else{
     return etudiants.filter((etudiant)=>{
     
         return etudiant.nomE.toLowerCase().includes(filterText.toLowerCase()) || etudiant.prenomE.toLowerCase().includes(filterText.toLowerCase());
        })
    }
  }

}
