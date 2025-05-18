import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentViewChildComponent } from './countdown-parent-view-child.component';

describe('CountdownParentViewChildComponent', () => {
  let component: CountdownParentViewChildComponent;
  let fixture: ComponentFixture<CountdownParentViewChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownParentViewChildComponent]
    });
    fixture = TestBed.createComponent(CountdownParentViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
