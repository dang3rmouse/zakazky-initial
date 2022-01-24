import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsStylingComponent } from './jobs-styling.component';

describe('JobsStylingComponent', () => {
  let component: JobsStylingComponent;
  let fixture: ComponentFixture<JobsStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
