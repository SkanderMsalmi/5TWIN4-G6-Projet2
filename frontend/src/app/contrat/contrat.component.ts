import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { contrat } from '../core/model/Contrat';
import { ContaratService } from '../core/services/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {

  }
}

