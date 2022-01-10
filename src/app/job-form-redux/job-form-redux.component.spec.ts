import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFormReduxComponent } from './job-form-redux.component';

describe('JobFormReduxComponent', () => {
  let component: JobFormReduxComponent;
  let fixture: ComponentFixture<JobFormReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFormReduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFormReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
