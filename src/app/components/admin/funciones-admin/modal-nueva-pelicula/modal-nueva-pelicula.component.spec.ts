import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaPeliculaComponent } from './modal-nueva-pelicula.component';

describe('ModalNuevaPeliculaComponent', () => {
  let component: ModalNuevaPeliculaComponent;
  let fixture: ComponentFixture<ModalNuevaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
