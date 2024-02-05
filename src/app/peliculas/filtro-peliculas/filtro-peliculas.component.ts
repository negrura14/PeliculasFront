import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css',
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

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
        'https://miro.medium.com/v2/resize:fit:1400/1*TBFORP0mTe2HMQ4opGvBnA.jpeg',
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
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe((valores: { [key: string]: any }) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();
    });
  }

  private leerValoresURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if (params['titulo']) {
        objeto.titulo = params['titulo'];
      }

      if (params['generoId']) {
        objeto.generoId = Number(params['generoId']);
      }

      if (params['proximosEstrenos']) {
        objeto.proximosEstrenos = params['proximosEstrenos'];
      }

      if (params['enCines']) {
        objeto.enCines = params['enCines'];
      }

      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaEnURL() {
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if (valoresFormulario.generoId !== '0') {
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if (valoresFormulario.proximosEstrenos) {
      queryStrings.push(
        `proximosEstrenos=${valoresFormulario.proximosEstrenos}`
      );
    }

    if (valoresFormulario.enCines) {
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.titulo.indexOf(valores.titulo) !== -1
      );
    }

    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.generos.indexOf(valores.generoId) !== -1
      );
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.proximosEstrenos
      );
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter((pelicula) => pelicula.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }
}
