import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
 
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.url)

  }

    
}
