import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';
import { Coordenada } from '../../utilidades/mapa/coordenada';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css',
})
export class FormularioCineComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) {}

  form: any = FormGroup;

  @Input()

  modelo: cineCreacionDTO = {
    nombre: '',
    latitud: -31.421807059107326,
    longitud: -64.18163537979127,
  }

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial: Coordenada[] = []

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitud: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      longitud: [
        '',
        {
          validators: [Validators.required]
        }
      ],
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud,})
    }
  }

  coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value)
  }
}
