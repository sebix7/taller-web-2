export interface Pelicula {
  id: number;
  titulo: string;
  imagen: File | string | null;
  descripcion: string;
  genero: string;
  duracion: string;
  actores: string;
  director: string;
  estreno: boolean;
  trailer: string;
}
