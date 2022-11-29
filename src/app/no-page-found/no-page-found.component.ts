import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ["../../assets/css/pages/error-pages.css"]
})
export class NoPageFoundComponent implements OnInit {

  // Properties
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
