import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute){}

  modelo: actorCreacionDTO = {nombre: 'Emanuel', fechaNacimiento: new Date()}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      
    })

  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
    
  }

}
