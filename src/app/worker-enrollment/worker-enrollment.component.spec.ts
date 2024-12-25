import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEnrollmentComponent } from './worker-enrollment.component';

describe('WorkerEnrollmentComponent', () => {
  let component: WorkerEnrollmentComponent;
  let fixture: ComponentFixture<WorkerEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerEnrollmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
