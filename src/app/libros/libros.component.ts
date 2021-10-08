import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosServices } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {


   libros = new Array;
  constructor(private librosServices: LibrosServices){}

  private libroSubscription!: Subscription;

  eliminarLibro(libro: string){
  }

  guardarLibro(f: any){
    if(f.valid){
      this.librosServices.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(){
    this.libros = this.librosServices.obtenerLibros();
    this.libroSubscription = this.librosServices.librosSubject.subscribe(() => {
      this.libros = this.librosServices.obtenerLibros();
    });
  }

  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }
}
