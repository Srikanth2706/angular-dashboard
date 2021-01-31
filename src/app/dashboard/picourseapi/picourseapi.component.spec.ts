import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicourseapiComponent } from './picourseapi.component';

describe('PicourseapiComponent', () => {
  let component: PicourseapiComponent;
  let fixture: ComponentFixture<PicourseapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicourseapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicourseapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
