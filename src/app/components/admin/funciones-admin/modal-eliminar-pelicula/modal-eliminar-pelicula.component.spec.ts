import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarPeliculaComponent } from './modal-eliminar-pelicula.component';

describe('ModalEliminarPeliculaComponent', () => {
  let component: ModalEliminarPeliculaComponent;
  let fixture: ComponentFixture<ModalEliminarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEliminarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
