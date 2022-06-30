import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Pelicula } from '../home/pelicula';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  JsonpClientBackend,
} from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  buscador: boolean = false;
  formBusqueda: FormGroup;
  peliculaBuscada: string = '';
  @Input() administradorRole: boolean = false;

  peliculas: Pelicula[] = [];
  Peliculas: any;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {
    this.formBusqueda = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    let res: Observable<Pelicula[]> = this.httpClient
      .get<Pelicula[]>('http://localhost:3000/peliculas')
      .pipe(share());

    res.subscribe(
      (value) => {
        console.log(value);
        this.Peliculas = value;
        this.peliculas = this.Peliculas.peliculas;
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }

  mostrarBusqueda() {
    this.peliculas.forEach((pelicula) => {
      if (
        pelicula.titulo
          .toLowerCase()
          .includes(this.formBusqueda.controls['titulo'].value.toLowerCase())
      ) {
        this.router.navigate(['/info/' + pelicula.id]);
        this.buscador = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
