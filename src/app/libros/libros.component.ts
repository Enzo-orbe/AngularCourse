import { Component, OnInit } from '@angular/core';
import { LibrosServices } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit {


   libros = new Array;
  constructor(private librosServices: LibrosServices){

  }

  eliminarLibro(libro: string){
  }

  guardarLibro(f: any){
    if(f.valid){
      this.librosServices.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(){
    this.libros = this.librosServices.obtenerLibros();
    this.librosServices.librosSubject.subscribe(() => {
      this.libros = this.librosServices.obtenerLibros();
    });
  }
}
