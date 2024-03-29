import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { multipleSelectorModel } from '../../utilidades/selector-multiple/multipleSelectorModel';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrl: './formulario-pelicula.component.css',
})
export class FormularioPeliculaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form: any = FormGroup;

  @Input()
  modelo: PeliculaDTO = {
    titulo: '',
    resumen: '',
    enCines: false,
    fechaLanzamiento: new Date(),
    trailer: '',
    poster: '',
  };

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> =
    new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados: multipleSelectorModel[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Accion' },
    { llave: 3, valor: 'Comedia' },
  ];

  generosSeleccionados: multipleSelectorModel[] = [];

  cinesNoSeleccionados: multipleSelectorModel[] = [
    { llave: 1, valor: 'Gran Rex' },
    { llave: 2, valor: 'Cinerama' },
    { llave: 3, valor: 'Hoyts' },
  ]

  cinesSeleccionados: multipleSelectorModel[] = []

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto: any) {
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios() {
    
    const generosIds = this.generosSeleccionados.map((val) => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map((val) => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }
}
