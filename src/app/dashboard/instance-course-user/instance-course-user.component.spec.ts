import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceCourseUserComponent } from './instance-course-user.component';

describe('InstanceCourseUserComponent', () => {
  let component: InstanceCourseUserComponent;
  let fixture: ComponentFixture<InstanceCourseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceCourseUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceCourseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
