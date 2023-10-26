import { Pipe, PipeTransform } from '@angular/core';
import { Equip } from '../core/model/equipe';

@Pipe({
  name: 'filterEquip'
})
export class FilterEquipPipe implements PipeTransform {

  transform(equipes: Equip[], filterText:string): Equip[] {
    if(equipes.length === 0 || filterText === ''){
    return equipes;
  }else{
   return equipes.filter((equip)=>{
   
       return equip.nomEquipe.toLowerCase().includes(filterText.toLowerCase());
      })
  }
  }

}
