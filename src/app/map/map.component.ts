import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mapDiv', {read: ElementRef}) mapDiv: ElementRef;
  @ViewChild('listPanel', {read: ElementRef}) listPanel: ElementRef;
  @ViewChild('mainPanel', {read: ElementRef}) mainPanel: ElementRef;

  public styleClass = 'hideMe';

  constructor() {
   
  }

  ngOnInit() {
  }

}
