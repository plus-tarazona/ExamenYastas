import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDayModalComponent } from './dish-day-modal.component';

describe('DishDayModalComponent', () => {
  let component: DishDayModalComponent;
  let fixture: ComponentFixture<DishDayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishDayModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
