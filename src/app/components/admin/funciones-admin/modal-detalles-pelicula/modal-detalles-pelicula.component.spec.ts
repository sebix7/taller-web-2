import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallesPeliculaComponent } from './modal-detalles-pelicula.component';

describe('ModalDetallesPeliculaComponent', () => {
  let component: ModalDetallesPeliculaComponent;
  let fixture: ComponentFixture<ModalDetallesPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetallesPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetallesPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
