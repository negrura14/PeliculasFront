import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute){}

  modelo: actorDTO = {nombre: 'Emanuel', fechaNacimiento: new Date(), foto: 'https://depor.com/resizer/95KlmBdMxi4wk3SWjIVgaDYB2y4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/AKKEMFCVPJFNRKTC2P4YLLGEJI.png' }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      
    })

  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
    
  }

}
