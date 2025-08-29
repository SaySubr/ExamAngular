import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintWindowComponent } from './complaint-window.component';

describe('ComplaintWindowComponent', () => {
  let component: ComplaintWindowComponent;
  let fixture: ComponentFixture<ComplaintWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
