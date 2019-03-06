import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthlistComponent } from './youthlist.component';

describe('YouthlistComponent', () => {
  let component: YouthlistComponent;
  let fixture: ComponentFixture<YouthlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
