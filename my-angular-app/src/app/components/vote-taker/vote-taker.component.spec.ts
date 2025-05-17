import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTakerComponent } from './vote-taker.component';

describe('VoteTakerComponent', () => {
  let component: VoteTakerComponent;
  let fixture: ComponentFixture<VoteTakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteTakerComponent]
    });
    fixture = TestBed.createComponent(VoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
