import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';
import { MapComponent } from '../map/map.component';
import { ErrorComponent } from '../error/error.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputComponent, MapComponent, ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
