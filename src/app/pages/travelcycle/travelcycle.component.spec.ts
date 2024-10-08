import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcycleComponent } from './travelcycle.component';

describe('TravelcycleComponent', () => {
  let component: TravelcycleComponent;
  let fixture: ComponentFixture<TravelcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelcycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
