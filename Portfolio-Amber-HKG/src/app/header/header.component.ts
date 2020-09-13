import { Component, OnInit } from '@angular/core';
declare const navSlide:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { navSlide();
 
   
  }

}
