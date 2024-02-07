import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  form: any = FormGroup;

  @Input()
  modelo: actorDTO = {nombre: 'Emanuel', fechaNacimiento: new Date(), foto: 'https://depor.com/resizer/95KlmBdMxi4wk3SWjIVgaDYB2y4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/AKKEMFCVPJFNRKTC2P4YLLGEJI.png'}

  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['',
    {
      validators: [Validators.required],
    },
  ],
  fechaNacimiento: '',
  foto: '',
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  archivoSeleccionado(file: any){
    this.form.get('foto').setValue(file)
  }
  onsubmit(){
    this.submit.emit(this.form.value)
  }

}
