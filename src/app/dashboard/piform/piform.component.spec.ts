import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiformComponent } from './piform.component';

describe('PiformComponent', () => {
  let component: PiformComponent;
  let fixture: ComponentFixture<PiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
