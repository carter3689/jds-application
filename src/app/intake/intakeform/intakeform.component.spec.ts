import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeformComponent } from './intakeform.component';

describe('IntakeformComponent', () => {
  let component: IntakeformComponent;
  let fixture: ComponentFixture<IntakeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
