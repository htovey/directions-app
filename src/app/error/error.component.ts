import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @ViewChild('errorPanel', {read: ElementRef}) errorPanel: ElementRef;
  
  public styleClass = 'hideMe';

  constructor() {}

  ngOnInit() {
  }
  
}
