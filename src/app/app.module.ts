import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { MapComponent } from './map/map.component';
import { OutputComponent} from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    ErrorComponent,
    MapComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
