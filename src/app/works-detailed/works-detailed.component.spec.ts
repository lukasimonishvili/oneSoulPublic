import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDetailedComponent } from './works-detailed.component';

describe('WorksDetailedComponent', () => {
  let component: WorksDetailedComponent;
  let fixture: ComponentFixture<WorksDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
