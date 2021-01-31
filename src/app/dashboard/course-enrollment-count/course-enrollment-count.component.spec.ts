import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollmentCountComponent } from './course-enrollment-count.component';

describe('CourseEnrollmentCountComponent', () => {
  let component: CourseEnrollmentCountComponent;
  let fixture: ComponentFixture<CourseEnrollmentCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEnrollmentCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnrollmentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
