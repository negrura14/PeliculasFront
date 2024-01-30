import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css',
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: any = FormGroup;

  generos = [
    {
      id: 1,
      nombre: 'Drama',
    },
    {
      id: 2,
      nombre: 'Accion',
    },
    {
      id: 3,
      nombre: 'Comedia',
    },
    {
      id: 4,
      nombre: 'Terror',
    },
    {
      id: 5,
      nombre: 'Suspenso',
    },
  ];

  peliculas = [
    {
      titulo: 'Spider-Man: Far From Home',
      enCines: false,
      proximosEstrenos: true,
      generos: [1, 2],
      poster:
        'https://play-lh.googleusercontent.com/_gIJ5eszlkwDw7tWekePeapreSRDlQti4XtsivYKUOUq8I-wEqROEv8kjHm3EXyfdrvjS92d-VDQFNR-AyA',
    },
    {
      titulo: 'Dioses De Egipto',
      enCines: true,
      proximosEstrenos: false,
      generos: [2],
      poster:
        'https://pics.filmaffinity.com/Dioses_de_Egipto-961106643-large.jpg',
    },
    {
      titulo: 'Irene, Yo y Mi Otro Yo',
      enCines: true,
      proximosEstrenos: false,
      generos: [3],
      poster:
        'https://play-lh.googleusercontent.com/eCxNI53pMqfvUbyzjYYmYlBlufhiQJtmRFYyMJw-aP_84pSJuqbSGzAq219TWIDA-kA=w240-h480-rw',
    },
  ];

  peliculasOriginal = this.peliculas;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges
    .subscribe( (valores: {[key: string]: any}) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      
    });
  }

  buscarPeliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }

    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal)
  }
}
