import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCrudComponent } from './trip-crud.component';

describe('TripCrudComponent', () => {
  let component: TripCrudComponent;
  let fixture: ComponentFixture<TripCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
