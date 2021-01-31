import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapiformComponent } from './addapiform.component';

describe('AddapiformComponent', () => {
  let component: AddapiformComponent;
  let fixture: ComponentFixture<AddapiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddapiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
