import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocardsComponent } from './todocards.component';

describe('TodocardsComponent', () => {
  let component: TodocardsComponent;
  let fixture: ComponentFixture<TodocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
