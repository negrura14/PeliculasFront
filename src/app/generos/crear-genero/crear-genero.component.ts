import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder){}

  form: any = FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: '',
      
    });
  }
  guardarCambios() {
    //* Guardar los cambios
    this.router.navigate(['/generos'])
  }
}
