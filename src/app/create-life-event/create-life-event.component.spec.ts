import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLifeEventComponent } from './create-life-event.component';

describe('CreateLifeEventComponent', () => {
  let component: CreateLifeEventComponent;
  let fixture: ComponentFixture<CreateLifeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLifeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLifeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
