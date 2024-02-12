import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cines',
  templateUrl: './crear-cines.component.html',
  styleUrl: './crear-cines.component.css',
})
export class CrearCinesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }
}
