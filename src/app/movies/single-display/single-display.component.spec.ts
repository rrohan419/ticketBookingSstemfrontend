import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDisplayComponent } from './single-display.component';

describe('SingleDisplayComponent', () => {
  let component: SingleDisplayComponent;
  let fixture: ComponentFixture<SingleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
