import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandySnackStoreComponent } from './candy-snack-store.component';

describe('CandySnackStoreComponent', () => {
  let component: CandySnackStoreComponent;
  let fixture: ComponentFixture<CandySnackStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandySnackStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandySnackStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
