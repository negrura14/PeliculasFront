import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'generos',
    component: IndiceGenerosComponent,
  },
  {
    path: 'generos/crear',
    component: CrearGeneroComponent,
  },
  {
    path: 'generos/editar/:id',
    component: EditarGeneroComponent,
  },
  
  {
    path: 'actores',
    component: IndiceActoresComponent,
  },
  {
    path: 'actores/crear',
    component: CrearActorComponent,
  },
  {
    path: 'actores/editar/:id',
    component: EditarActorComponent,
  },
  {
    path: 'cines',
    component: IndiceCinesComponent,
  },
  {
    path: 'cines/crear',
    component: CrearCinesComponent,
  },
  {
    path: 'cines/editar/:id',
    component: EditarCineComponent,
  },
  {
    path: 'peliculas/crear',
    component: CrearPeliculasComponent,
  },
  {
    path: 'peliculas/editar/:id',
    component: EditarPeliculaComponent,
  },
  //! si la ruta es invalida redirige al inicio
  {path: '**',redirectTo: '' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
