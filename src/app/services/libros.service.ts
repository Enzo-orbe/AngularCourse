import { Subject } from "rxjs";

export class LibrosServices {

  librosSubject = new Subject();

  private libros = ['libro de enzo', 'libro de albana', 'libro de juli'];

  obtenerLibros() {
    return [...this.libros];
  }

  eliminarLibro(libroNombre: string){
  this.libros =  this.libros.filter(x => x !== libroNombre);
  this.librosSubject.next();
  }

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }
}
