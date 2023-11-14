import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { Departement } from 'src/app/core/model/departement';
 
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  
  @Input() public departement: Departement;
  @Output() notification = new EventEmitter<Departement>()

  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    this.notification.emit(this.departement)   //declancher la notif
 
  }

 
 
}


