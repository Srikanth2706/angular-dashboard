import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiapiComponent } from './piapi.component';

describe('PiapiComponent', () => {
  let component: PiapiComponent;
  let fixture: ComponentFixture<PiapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
