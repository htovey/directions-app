import { Component, OnInit } from '@angular/core';
import { Route } from '../model/route';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  route: Route;
  
  constructor() { }

  ngOnInit() {
  }

}
