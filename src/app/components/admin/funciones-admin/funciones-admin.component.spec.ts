import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesAdminComponent } from './funciones-admin.component';

describe('FuncionesAdminComponent', () => {
  let component: FuncionesAdminComponent;
  let fixture: ComponentFixture<FuncionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
