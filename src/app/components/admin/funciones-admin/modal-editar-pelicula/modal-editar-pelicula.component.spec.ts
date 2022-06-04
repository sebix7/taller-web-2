import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPeliculaComponent } from './modal-editar-pelicula.component';

describe('ModalEditarPeliculaComponent', () => {
  let component: ModalEditarPeliculaComponent;
  let fixture: ComponentFixture<ModalEditarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
