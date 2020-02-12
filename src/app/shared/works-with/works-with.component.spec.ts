import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksWithComponent } from './works-with.component';

describe('WorksWithComponent', () => {
  let component: WorksWithComponent;
  let fixture: ComponentFixture<WorksWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
