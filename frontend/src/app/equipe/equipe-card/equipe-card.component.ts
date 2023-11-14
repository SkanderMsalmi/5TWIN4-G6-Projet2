import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equip } from 'src/app/core/model/equipe';

@Component({
  selector: 'app-equipe-card',
  templateUrl: './equipe-card.component.html',
  styleUrls: ['./equipe-card.component.scss']
})
export class EquipeCardComponent implements OnInit {
  @Input() equipe: Equip;
  @Output() private deleteE:EventEmitter<Equip> = new EventEmitter();
  public showModal:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  deleteEquipe(){
    this.deleteE.emit(this.equipe);
    this.showModal=false;
  }

}
