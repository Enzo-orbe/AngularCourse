import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LibrosServices } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro!: string;
  @Output() libroClicked = new EventEmitter();
  constructor(private LibroService: LibrosServices){

  }
  onClicked() {
    //this.libroClicked.emit();
      this.LibroService.eliminarLibro(this.tituloLibro);
  }
}
