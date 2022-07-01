import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { share } from 'rxjs';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-eliminar-pelicula',
  templateUrl: './modal-eliminar-pelicula.component.html',
  styleUrls: ['./modal-eliminar-pelicula.component.css'],
})
export class ModalEliminarPeliculaComponent implements OnInit {
  target: string = 'eliminarPelicula';
  titulo: string = 'Eliminar Película';
  @Input() pelicula: Pelicula = {
    id: 0,
    titulo: '',
    imagen: null,
    descripcion: '',
    genero: '',
    duracion: '',
    actores: '',
    director: '',
    estreno: true,
    trailer: '',
  };

  constructor(protected httpClient: HttpClient) {}

  onDelete(id: number): void {
    this.httpClient
      .delete('http://localhost:3000/admin/pelicula/eliminar/' + id)
      .pipe(share())
      .subscribe(
        (val) => {
          Swal.fire({
            title: 'Película eliminada correctamente',
            icon: 'success',
          }).then((result) => location.reload());
        },
        (err) => Swal.fire(err.error.mensaje, '', 'error')
      );
  }

  ngOnInit(): void {}
}
