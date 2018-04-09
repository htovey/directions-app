import { Component, Output, Input, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Route } from '../model/route';
import { AppComponent } from '../app.component';
import { NgForm, FormGroup, FormControl, Validators, AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() updateView = new EventEmitter<Route>();
  @Input() route: Route;
  
  appFormGroup: FormGroup;

  public styleClass = 'showMe';

  model = new Route();
  
  constructor() {}

  ngOnInit() {
    this.appFormGroup = new FormGroup({
        start: new FormControl('', [
          Validators.required
        ]),
        end: new FormControl('', [
          Validators.required
        ])
    });
  }

  onSubmit(appForm: NgForm) { 
      console.log('1 SUBMIT***');
      
      this.updateView.emit(this.model);
      appForm.reset();
  }

  // get diagnostic() { return JSON.stringify(this.model); }
  // get start() { return this.appFormGroup.get('start')}
  // get end() { return this.appFormGroup.get('end')}
}
