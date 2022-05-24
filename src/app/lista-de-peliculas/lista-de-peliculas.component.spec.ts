import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePeliculasComponent } from './lista-de-peliculas.component';

describe('ListaDePeliculasComponent', () => {
  let component: ListaDePeliculasComponent;
  let fixture: ComponentFixture<ListaDePeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
