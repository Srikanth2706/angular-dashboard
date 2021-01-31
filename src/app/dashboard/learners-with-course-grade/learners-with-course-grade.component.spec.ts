import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersWithCourseGradeComponent } from './learners-with-course-grade.component';

describe('LearnersWithCourseGradeComponent', () => {
  let component: LearnersWithCourseGradeComponent;
  let fixture: ComponentFixture<LearnersWithCourseGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnersWithCourseGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnersWithCourseGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
