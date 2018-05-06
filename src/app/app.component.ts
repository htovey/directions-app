import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Route } from './model/route';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { element } from 'protractor';
import { OutputComponent } from './output/output.component';
import { MainComponent } from './main/main.component';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  @ViewChild(OutputComponent) outPut: OutputComponent;
  @ViewChild(FormComponent) form: FormComponent;
  
  @Input('route') route: Route;
  
  public styleClass = 'hideMe';
  public start: string;
  public end: string;

  title = 'Angular Map App';

  constructor() {  }
 
  ngOnInit() {  }

  updateMapView(route) {
    //console.log('2 UPDATE VIEW');
   if (this.form.styleClass == 'showMe') {
    var mapComp = this.outPut.mapComponent;
    var promiseMe = new Promise( (resolve, reject)=> {
      console.log('1 Promise Constructor');
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer();
      
  var mapOptions = {
    zoom: 12
  };
      var mapDiv = mapComp.mapDiv.nativeElement;
      var listDiv = mapComp.listPanel.nativeElement;
      var map = new google.maps.Map(mapDiv, mapOptions);  
      
      directionsDisplay.setPanel(listDiv);
      directionsDisplay.setMap(map);
      directionsService.route({
            origin: route.start, 
            destination: route.end,
            travelMode: 'DRIVING'
          }, function(response, status) {
              console.log('2 IS STATUS OK?');
              if (status === 'OK') {
                //console.log('SUCCESS');
              
                directionsDisplay.setDirections(response);
                resolve('success');
              } else {
                //console.log('NOT OK');
                reject('error response returned');
              }
          });
    
      });

      promiseMe.then(value => {
        this.toggleStyleClasses([this.form, mapComp ])
      }, reason => {
        this.toggleStyleClasses([this.form, this.outPut.errorComponent])
      });
    } else {
      this.toggleStyleClasses([this.form]);
      this.outPut.clearComponents();
    }
  }

  toggleStyleClasses(components) {
    //console.log('3 should only call here after STATUS CHECK');
    components.forEach(element => {
      if (element.styleClass == 'showMe') {
        element.styleClass = 'hideMe';
      } else {
        element.styleClass = 'showMe';
      }
    });
  }
}
