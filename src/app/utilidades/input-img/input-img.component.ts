import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css',
})
export class InputImgComponent implements OnInit {
  constructor() {
    this.imagenBase64 = '';
    this.urlImagenActual= '';
  }

  imagenBase64: string ;

  @Input()
  urlImagenActual: string;

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>()

  ngOnInit(): void {}

  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file)
        .then((value: unknown) => (this.imagenBase64 = value as string)) 
        .catch((error) => console.log(error));
        this.archivoSeleccionado.emit(file)
        this.urlImagenActual = '';
    }
  }

  
}