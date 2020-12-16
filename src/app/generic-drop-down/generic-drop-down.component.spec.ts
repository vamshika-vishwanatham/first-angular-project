import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDropDownComponent } from './generic-drop-down.component';

describe('GenericDropDownComponent', () => {
  let component: GenericDropDownComponent;
  let fixture: ComponentFixture<GenericDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
