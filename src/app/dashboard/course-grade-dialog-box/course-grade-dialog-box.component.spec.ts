import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGradeDialogBoxComponent } from './course-grade-dialog-box.component';

describe('CourseGradeDialogBoxComponent', () => {
  let component: CourseGradeDialogBoxComponent;
  let fixture: ComponentFixture<CourseGradeDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseGradeDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGradeDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
