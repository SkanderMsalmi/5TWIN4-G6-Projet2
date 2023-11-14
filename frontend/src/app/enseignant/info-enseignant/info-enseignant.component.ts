import { Component, Input, OnInit, Output } from '@angular/core';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-enseignant',
  templateUrl: './info-enseignant.component.html',
  styleUrls: ['./info-enseignant.component.scss']
})
export class InfoEnseignantComponent implements OnInit { 
  @Input() enseignant: Enseignant;
  @Output() notification: EventEmitter<Enseignant> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
