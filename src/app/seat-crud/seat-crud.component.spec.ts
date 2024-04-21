import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatCrudComponent } from './seat-crud.component';

describe('SeatCrudComponent', () => {
  let component: SeatCrudComponent;
  let fixture: ComponentFixture<SeatCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
