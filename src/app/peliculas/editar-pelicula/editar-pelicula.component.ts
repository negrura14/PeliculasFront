import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent implements OnInit {

  constructor(){}

  modelo: PeliculaDTO = {
    titulo: 'King Kong', 
    'trailer': 'abc', 
    enCines:  true, 
    resumen: 'algo',
    fechaLanzamiento: new Date(),
    poster: 'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'

}

  ngOnInit(): void {
    
  }

}
