import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengercardsComponent } from './passengercards.component';

describe('PassengercardsComponent', () => {
  let component: PassengercardsComponent;
  let fixture: ComponentFixture<PassengercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengercardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
