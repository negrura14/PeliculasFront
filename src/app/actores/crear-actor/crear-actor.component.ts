import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css',
})
export class CrearActorComponent implements OnInit {
  ngOnInit(): void {}

  guardarCambios(actor: actorCreacionDTO) {
    console.log('esto', actor);
  }
}
