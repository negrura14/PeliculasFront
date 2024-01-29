import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {

  constructor(private router: Router){}

  guardarCambios(genero: generoCreacionDTO) {
    //* Guardar los cambios
    console.log(genero);
    
    this.router.navigate(['/generos'])
  }

  
}
