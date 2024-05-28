import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItineraryComponent } from './new-itinerary.component';

describe('NewItineraryComponent', () => {
  let component: NewItineraryComponent;
  let fixture: ComponentFixture<NewItineraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewItineraryComponent]
    });
    fixture = TestBed.createComponent(NewItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
