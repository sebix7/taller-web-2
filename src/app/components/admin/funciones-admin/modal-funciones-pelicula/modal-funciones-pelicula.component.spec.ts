import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFuncionesPeliculaComponent } from './modal-funciones-pelicula.component';

describe('ModalFuncionesPeliculaComponent', () => {
  let component: ModalFuncionesPeliculaComponent;
  let fixture: ComponentFixture<ModalFuncionesPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFuncionesPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFuncionesPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
