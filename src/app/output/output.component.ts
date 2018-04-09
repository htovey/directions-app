import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { AppComponent } from '../app.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
 @ViewChild(ErrorComponent) errorComponent: ErrorComponent;
 @ViewChild(MapComponent) mapComponent: MapComponent
 
  constructor() {}

  ngOnInit() {
  }

  //todo - find more elegant way to do this...
  clearComponents() {
    this.errorComponent.styleClass = 'hideMe';
    this.mapComponent.styleClass = 'hideMe';
  }
}
